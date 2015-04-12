export default Ember.Component.extend({
  classNames: ['post'],
  hasThumbnail: function() {
    var thumb = this.get('data').thumbnail;
    return thumb.length > 0;
  }.property('data.thumbnail'),
  isNsfw: function() {
    return this.get('data').thumbnail === 'nsfw';
  }.property('data.thumbnail'),
  isSelfPost: function() {
    return this.get('data').thumbnail === 'self';
  }.property('data.thumbnail')
});

