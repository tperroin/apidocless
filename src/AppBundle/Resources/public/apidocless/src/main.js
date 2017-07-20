// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import jQuery from 'jquery'
window.jQuery = jQuery

require('./assets/semantic/dist/semantic.css')
require('./assets/semantic/dist/semantic.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, Hello }
})
