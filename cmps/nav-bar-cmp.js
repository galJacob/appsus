
export default {
    template: `
        <section class='nav-bar '>
        <button class="hamburger hamburger--spin"  v-bind:class="{'is-active': active}" @click= "toggleMenu(null)"  type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <transition name="fade">
        <div v-if="active" class="nav-container flex space-evenly" ref = "navBarContent">
            <li><a @click="toggleMenu('/')">Home</a></li>
            <li><a @click="toggleMenu('/email-app')">Mister Email</a></li>
            <li><a @click="toggleMenu('/keep-app')">Mister Keep</a></li>
            <li><a href="#about">About</a></li>
        </div>
        </transition>
        </section>
    `,

    data () {
        return {
            active:true,
        }
    },

    created () {
        if(window.innerWidth <= 500) {
            this.active = false;
        }
        
    },
    
    methods: {
        toggleMenu(route) {
            if(route) this.$router.push(`${route}`);
            if(window.innerWidth <= 500)this.active = !this.active;
        },
    }
}