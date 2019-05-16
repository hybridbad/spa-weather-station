var header = new Vue({
  el: '#header',
  data: {
    message: 'Hello Vue.js!'
  }
});

var menu = new Vue({
  el: '#menu',
  data: {
    message: 'Menu'
  }
});

var weatherData = new Vue({
  el: '#weatherData',
  data: {
    temperature: 20
  },

  methods: {
    increment() {
      this.temperature++;
    }
  }
});
