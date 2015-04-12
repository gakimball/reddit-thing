export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://www.reddit.com/.json').then(function(data) {
      return data.data.children;
    });
  }
});