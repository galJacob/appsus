import emailApp  from '../pages/email-app.js';
import miserKeep  from '../pages/mister-keep-cmp.js';
import home from '../pages/home.js';



export default [
    { path: '/', component: home },
    { path: '/email-app', component: emailApp },
    { path: '/mister-keep', component: miserKeep },
]