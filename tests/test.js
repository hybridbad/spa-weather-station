module.exports = {
  'Vue js test': function(browser) {
    browser
      .url('localhost:8080/')
      .assert.containsText('#weather', '20 degrees');
  }
};
