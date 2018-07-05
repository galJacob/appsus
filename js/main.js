'use strict';
import myRoutes from './routes.js';
import navBar from '../cmps/nav-bar-cmp.js';


Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes});


new Vue({
    router: myRouter,
    el: '#app',
    created(){
        console.log('app was created');
    },   
    
    components:{
        navBar,
    }
})
