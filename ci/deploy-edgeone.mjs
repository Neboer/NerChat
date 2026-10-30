import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const projectName = 'nerchat-doc';
const projectId = 'makers-7lgb8i4pzi2a';
const directory = '.vitepress/dist';
const environment = process.argv[2];
if (!['preview', 'production'].includes(environment)) throw new Error('Expected preview or production');
const token = process.env.EDGEONE_API_TOKEN;
if (!token) throw new Error('EDGEONE_API_TOKEN is required');
// Fail closed if the resource was deleted or changed to an unexpected region.
const response = await fetch('https://pages-api.cloud.tencent.com/v1', {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ Action: 'DescribePagesProjects', Filters: [{ Name: 'ProjectId', Values: [projectId] }], Offset: 0, Limit: 10 }),
});
const body = await response.json();
const project = body.Data?.Response?.Projects?.[0];
if (!response.ok || body.Code !== 0 || project?.Name !== projectName || project?.Area !== 'mainland') {
    throw new Error('Unable to verify expected mainland project; refusing deployment');
}
const result = spawnSync('npx', ['--yes', '--registry=https://registry.npmjs.org', 'edgeone@1.6.47', 'makers', 'deploy', directory,
    '--name', projectName, '--env', environment, '--site', 'china', '--skip-ai-gateway-sync', '--json',
], { env: { ...process.env, EDGEONE_PAGES_API_TOKEN: token }, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const output = (result.stdout ?? '') + (result.stderr ?? '');
console.log(output.replaceAll(token, '[REDACTED]'));
if (result.status !== 0) process.exit(result.status ?? 1);
const line = output.split('\n').findLast(line => line.startsWith('{"status":'));
if (!line) throw new Error('Deployment result is missing');
const deployment = JSON.parse(line);
if (deployment.status !== 'success' || deployment.projectId !== projectId) throw new Error('Unexpected deployment result');
fs.mkdirSync('.deploy', { recursive: true });
fs.writeFileSync(`.deploy/${environment}.json`, JSON.stringify(deployment, null, 2));
