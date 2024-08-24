import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHouse, faCode, faLock, faRocket, faBolt, faWrench,
     faGlobe, faMobile, faCircle, faFire, faMobileScreen, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'


const font_awesome_icons = [faUserSecret, faHouse, faCode, faLock,
    faRocket, faBolt, faWrench, faGlobe, faMobile, faCircle, faFire, faMobileScreen, faUsers, faChrome, faFile,
    faApple, faAndroid]

export default {
    install: (app: any) => {
        library.add(font_awesome_icons)
        app.component('font-awesome-icon', FontAwesomeIcon)
    }
}
