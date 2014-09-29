import Ember from 'ember';

export default Ember.Object.extend({
  open: function(options) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject){
      var url = 'http://dev.instatube.tv/login/google_oauth2?success_url=http://torii-example.com:4200?code=yeh&error_url=http://torii-example.com:4200?code=nah';
      return _this.get('popup').open(url, ['code']).then(function(result) {
        Ember.Logger.log('data is ...', result.code);
      },
      function(reject) {
        Ember.Logger.log('reject ...', reject);
      });
    });
  }
});