import Vue, { h } from 'vue';
import { createI18n, castToVueI18n } from 'vue-i18n-bridge';
import VueI18n from 'vue-i18n';
import App from './App.vue';

Vue.use(VueI18n, { bridge: true }); // you must specify '{ bridge: true }' plugin option when install vue-i18n

// `createI18n` options is almost same vue-i18n-next (vue-i18n@v9.x) API
const i18n = castToVueI18n(
  createI18n(
    {
      legacy: false,
      locale: 'en',
      silentTranslationWarn: true,
      missingWarn: false,
      messages: {
        en: {
          key: 'global value',
        },
        ja: {
          key: 'こんにちは、{name}！',
        },
      },
    },
    VueI18n
  )
); // `createI18n` which is provide `vue-i18n-bridge` has second argument, you **must** pass `VueI18n` constructor which is provide `vue-i18n`

const app = new Vue({ i18n, render: () => h(App) });

Vue.use(i18n); // you must install `i18n` instance which is created by `createI18n`
app.$mount('#app');
