import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14785572 = () => interopDefault(import('../pages/fotos.vue' /* webpackChunkName: "pages/fotos" */))
const _88a5a5a0 = () => interopDefault(import('../pages/modal.vue' /* webpackChunkName: "pages/modal" */))
const _74285fe7 = () => interopDefault(import('../pages/postagens.vue' /* webpackChunkName: "pages/postagens" */))
const _0a36c0d5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fotos",
    component: _14785572,
    name: "fotos"
  }, {
    path: "/modal",
    component: _88a5a5a0,
    name: "modal"
  }, {
    path: "/postagens",
    component: _74285fe7,
    name: "postagens"
  }, {
    path: "/",
    component: _0a36c0d5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
