import { Plugin } from 'vue';
import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import es from '@vee-validate/i18n/dist/locale/es.json';

const plugin: Plugin = {
  install: (app) => {
    /**
     * Locale
     */
    configure({
      generateMessage: localize({
        en,
        es
      })
    });
    setLocale('es');
    /**
     * Validates
     */
    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
  }
};

export default plugin;
