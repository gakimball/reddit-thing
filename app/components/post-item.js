export default Ember.Component.extend({
  classNames: ['post'],
  hasThumbnail: function() {
    return typeof this.get('data').thumbnail === 'string';
  }.property('data.thumbnail'),
  isNsfw: function() {
    return this.get('data').thumbnail === 'nsfw';
  }.property('data.thumbnail'),
  isSelfPost: function() {
    return this.get('data').thumbnail === 'self';
  }.property('data.thumbnail')
});

