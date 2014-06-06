App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('about');
  this.resource('surprise');

});



// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//   }
// });
