

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

var app2 = new Vue({
  el: '#weather',
  data: {
    temperature: '20' + ' degrees'
  }
})

var weatherData = new Vue({
  el: '#weatherData',
  data: {

      temperature: 20
  },

  methods: {
    increment () {
      this.temperature++
    }
  }
})