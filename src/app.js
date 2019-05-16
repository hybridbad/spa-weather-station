new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
});

//Component 1
var app2 = new Vue({
  el: '#weather',
  data: {
    temperature: '20' + ' degrees' // API request
  }
});
