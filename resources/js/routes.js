import login from './components/auth/login';
import register from './components/auth/register';
import forget from './components/auth/forget';
const routes = [
    { path: '/', component: login },
    { path: '/register', component: register },
    { path: '/forget', component: forget },

]




export default routes;