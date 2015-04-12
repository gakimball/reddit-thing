var _params;

export default Ember.Route.extend({
  model: function(params) {
    _params = params;
  },
  setupController: function(controller) {
    controller.set('state', _params.state);
    controller.set('code', _params.code);
    controller.authenticate();
  }
});
