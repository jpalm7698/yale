import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import userSignedIn from '../mixins/userSignedIn';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login, // <-- that's a view, not a component,
    meta: { requiresAuth: false },
    beforeEnter: async () => {
      // if a user is signed in, redirect the router to the index page
      const user = await userSignedIn();
      if ( user ) {
        console.info('A user is already logged in. Redirecting to index page.');
        return { path: '/' };
      }
    },
  },
  {
    path: "/about",
    name: "About",
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  // if the route requires authentication and no user is signed in,
  // redirect to the login page.
  const user = await userSignedIn();

  if ( to.meta.requiresAuth && !user ) {
    console.info('This page requires a user to be signed in. ',
    'Redirecting to login page.');

    return { path: '/login' };
  }
})

export default router
