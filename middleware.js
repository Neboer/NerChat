export function middleware({ request, next }) {
    const url = new URL(request.url);
    if (url.protocol === 'http:') {
        url.protocol = 'https:';
        return new Response(null, {
            status: 308,
            headers: { Location: url.href, 'Cache-Control': 'public, max-age=3600' },
        });
    }
    return next();
}
