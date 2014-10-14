import Ember from 'ember';
import Oauth2 from 'torii-providers/oauth2-code';
// import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Github
 * using the OAuth2 authorization flow in a popup window.
 * @class
 */
var Instatube = Oauth2.extend({
  name:       'instatube',
  baseUrl:    'http://dev.instatube.tv/oauth',

  // additional url params that this provider requires
  requiredUrlParams: ['state'],

  responseParams: ['code'],

  state: 'STATE',

  // redirectUri: configurable('redirectUri', function(){
  //   // A hack that allows redirectUri to be configurable
  //   // but default to the superclass
  //   return this._super();
  // })
});

export default Instatube;