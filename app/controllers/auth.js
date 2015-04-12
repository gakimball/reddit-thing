var AuthController = Ember.Controller.extend({
  queryParams: ['state', 'code'],
  state: '',
  code: ''
});

export default AuthController;
