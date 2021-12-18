import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
