import VueLuckywheel from './Luckywheel.vue';
import VueLuckywheelItem from './LuckywheelItem.vue';

const components = [
  VueLuckywheel,
  VueLuckywheelItem,
]

const install = Vue => {
  if (install.installed) return

  components.map((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VueLuckywheel,
  VueLuckywheelItem,
}
