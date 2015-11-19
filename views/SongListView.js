var SongListView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {

    //call detach to preserve event handlers on child nodes
    this.$el.children().detach();
    
    return this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new SongListItemView({model: song}).render();
      })
    );
  }

});