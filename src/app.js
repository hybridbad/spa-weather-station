var header = new Vue({
  el: '#header',
  data: {
    componentName: 'WeatherData',
    message: 'Is on',
    accentColor: 'accent-color',
    header: 'header'
  }
});

var menu = new Vue({
  el: '#menu',
  data: {
    componentName: 'Menu',
    list: ['Option 1', 'Option 2']
  },
  methods: {
    retrieveWeatherData: function() {
      alert('Weather data retrieved');
    }
  }
});

var weatherData = new Vue({
  el: '#weatherData',
  data: {
    results: [],
    isOnline: true,
    componentName: '',
    query: '',
    emailMessage: '',
    searchIndexes: [],
    selectedSearchIndexes: ['temperature', 'pressure']
  },
  methods: {
    executeSearch: function(event) {
      alert(
        'Query: ' + this.query + '"Button:"' + event.target.innerText + '"'
      );
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/data')
      .then(response => (this.results = response.data.data.reverse()));
  }
});
