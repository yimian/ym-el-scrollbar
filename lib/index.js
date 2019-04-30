import YmElScrollbar from './YmElScrollbar.vue';

const myPlugin = {
  install: function install(Vue) {
    Vue.component('YmElScrollbar', YmElScrollbar);
  },
};

export default myPlugin;
