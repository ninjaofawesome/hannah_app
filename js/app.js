App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('about');
  this.resource('surprise');
  this.resource('richland');
});


App.RichlandRoute = Ember.Route.extend({
  model: function(){
    return richland;
  }

});

var richland = [{
  id: '1',
  title: 'The City of Richland',
  paragraph: 'Richland is the town where Hannah grew up and lived for the first 18 years of her life.',
  url: 'http://en.wikipedia.org/wiki/Richland,_Washington'
},
{
  id: '2',
  title: 'The Hanford Area',
  paragraph: 'The Hanford Area is a mostly decomissioned nuclear production facility.  It was established in the second world war as part of the Manhattan Project.',
  url: 'http://en.wikipedia.org/wiki/Hanford_Site'
},
{
  id: '3',
  title: 'Richland High School',
  paragraph: 'This is the home of the Bombers.  The mascot is a mushroom cloud.',
  url: 'http://en.wikipedia.org/wiki/Richland_High_School_(Washington)'

}

]


// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//   }
// });
