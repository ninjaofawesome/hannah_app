App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('about', {path: '/about'});
  this.resource('surprise', {path: '/surprise'});

});



// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//   }
// });
