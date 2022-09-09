export { default as Paginations } from '../../components/Paginations.vue'
export { default as Photos } from '../../components/photos.vue'
export { default as Posts } from '../../components/posts.vue'
export { default as ModalsModal } from '../../components/modals/modal.vue'
export { default as ModalsModalFotos } from '../../components/modals/modalFotos.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
