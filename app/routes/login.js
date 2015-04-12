export default Ember.Route.extend({
  beforeModel: function() {
    var url = 'https://www.reddit.com/api/v1/authorize?client_id=wi6lWhoAwCHWlA&response_type=code&state=test&redirect_uri=http://localhost:4200/auth&duration=permanent&scope=identity,vote';
    window.location.replace(url);
  }
});