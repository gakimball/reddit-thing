var AuthController = Ember.Controller.extend({
  queryParams: ['state', 'code'],
  state: '',
  code: '',
  authenticate: function() {
    console.log(sessionStorage.code);
    Ember.$.ajax('https://www.reddit.com/api/v1/access_token', {
      type: 'POST',
      dataType: 'JSON',
      data: {
        'grant_type': 'authorization_code',
        'code': sessionStorage.code,
        'redirect_uri': 'http://localhost:4200/auth'
      },
      beforeSend: function(xhr) {
        var user = 'wi6lWhoAwCHWlA';
        var pass = '3w92iRmYHXwwHt4HRZnGIh1I8K8';
        xhr.setRequestHeader('Authorization', 'Basic '+btoa(user+':'+pass));
      },
      success: function(data, textStatus, jqXHR) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {

      }
    })
  }
});

export default AuthController;
