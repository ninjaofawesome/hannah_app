App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('a', {path: '/a'});
  this.resource('hello', {path: '/hello'});
});

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });
