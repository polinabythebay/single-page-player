var Song = Backbone.Model.extend({
  //number of times played
  defaults: {
    url: '',
    title: 'No Title',
    artist: 'No Artist',
    playCount: 0
  },

  initialize: function() {
    console.log("You've created a new song");
  }
});