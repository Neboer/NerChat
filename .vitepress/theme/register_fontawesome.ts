import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHouse, faCode, faLock, faRocket, faBolt, faWrench, faGlobe, faMobile, faCircle, faFire, faMobileScreenButton, faUsers } from '@fortawesome/free-solid-svg-icons'


const font_awesome_icons = [faUserSecret, faHouse, faCode, faLock, faRocket, faBolt, faWrench, faGlobe, faMobile, faCircle, faFire, faMobileScreenButton, faUsers]

export default {
    install: (app: any) => {
        library.add(font_awesome_icons)
        app.component('font-awesome-icon', FontAwesomeIcon)
    }
}
