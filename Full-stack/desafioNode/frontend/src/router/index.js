import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';
import Users from '../views/Users.vue';
import UserDetails from '../views/UserDetails.vue';

const routes = [
  { path: '/', name: 'LoginForm', component: LoginForm },
  { path: '/signup', name: 'SignupForm', component: SignupForm },
  { path: '/users', name: 'Users', component: Users },
  { path: '/users/:id', name: 'UserDetails', component: UserDetails }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
