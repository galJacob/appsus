import emailApp  from '../pages/email-app.js';
import miserKeep  from '../pages/keep-app.js';
import home from '../pages/home.js';




export default [
    { path: '/', component: home },
    { path: '/email-app', component: emailApp },
    { path: '/keep-app', component: miserKeep },
]