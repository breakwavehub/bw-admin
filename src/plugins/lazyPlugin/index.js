import lazyload from './lazyload'

const lazyPlugin = {}
lazyPlugin.install = Vue => {
  Vue.directive('lazy', lazyload)
}
export default lazyPlugin
