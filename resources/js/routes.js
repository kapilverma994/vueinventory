import login from './components/auth/login';
import register from './components/auth/register';
import forget from './components/auth/forget';
import home from './components/home';
const routes = [
    { path: '/', component: login },
    { path: '/register', component: register },
    { path: '/forget', component: forget },
    { path: '/home', component: home },

]




export default routes;