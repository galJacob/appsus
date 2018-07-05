import emailApp  from '../pages/email-app.js';
import miserKeep  from '../pages/keep-app.js';
import home from '../pages/home.js';
import emailDetails from '../cmps/mister-Email/email-details.js';




export default [
    { path: '/', component: home },
    { path: '/email-app', component: emailApp },
    { path: '/email-app/:emailId', component: emailDetails },
    { path: '/keep-app', component: miserKeep },
]