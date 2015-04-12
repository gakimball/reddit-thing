function uniqueID() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default Ember.Route.extend({
  beforeModel: function() {
    var code = uniqueID();
    sessionStorage.code = code;

    var url = 'https://www.reddit.com/api/v1/authorize?client_id=wi6lWhoAwCHWlA&response_type=code&state='+code+'&redirect_uri=http://localhost:4200/auth&duration=permanent&scope=identity,vote';
    window.location.replace(url);
  }
});