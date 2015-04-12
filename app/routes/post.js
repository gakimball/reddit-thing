export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://www.reddit.com/r/'+params.subreddit+'/comments/'+params.id+'/.json';
    return Ember.$.getJSON(url).then(function(data) {
      return {
        post: data[0].data.children[0].data,
        comments: data[1].data.children
      };
    });
  }
});
