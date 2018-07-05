
export default {
    template:`
        <ul class='nav-bar'>
            <li><a class="active" @click="$router.push('/')">Home</a></li>
            <li><a @click="$router.push('/mister-Email')">Mister Email</a></li>
            <li><a @click="$router.push('/mister-keep')">Mister Keep</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    `,
}