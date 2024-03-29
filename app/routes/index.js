import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInToFacebook: function(){
      var controller = this.controllerFor('index');
      // The provider name is passed to `open`
      this.get('torii').open('facebook-connect').then(function(authorization){
        // FB.api is now available. authorization contains the UID and
        // accessToken.
        controller.set('hasFacebook', true);
      });
    },
    signInToInstatube: function(){
      var controller = this.controllerFor('index');
      // The provider name is passed to `open`
      this.get('torii').open('instatube').then(function(authorization){
        controller.set('hasInstatube', true);
      });
    },
  }
});
