import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import apps from './routes/apps'
import pages from './routes/pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'login' } },
    ...apps,
    ...pages,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/pages/authentication/Login.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/image/Image.vue'),
      meta: {
        pageTitle: 'Add customer',
        breadcrumb: [
          {
            layout: 'full',
            text: 'Registration',
            active: true,
          },
        ],
      },
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/card/CardProductDetails.vue'),
      meta: {
        pageTitle: 'Add customer',
        breadcrumb: [
          {
            layout: 'full',
            text: 'Registration',
            active: true,
          },
        ],
      },
    },
    {
      path: '/card2',
      name: 'card2',
      component: () => import('@/views/extensions/swiper/Swiper.vue'),
      meta: {
        pageTitle: 'Add customer',
        breadcrumb: [
          {
            layout: 'full',
            text: 'Registration',
            active: true,
          },
        ],
      },
    },
    {
      path: '/card-registration',
      name: 'card-registration',
      component: () => import('@/views/pages/contents/CardRegistration.vue'),
      meta: {
        pageTitle: 'Customer',
        breadcrumb: [
          {
            layout: 'full',
            text: 'Registration',
            active: true,
          },
        ],
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
