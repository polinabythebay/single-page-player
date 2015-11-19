var SongListView = Backbone.View.extend({

  tagName: 'table',

  template: _.template('<th>Artist</th><th>Title</th></th><th>PlayCount</th>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    //call detach to preserve event handlers on child nodes
    this.$el.children().detach();

    return this.$el.html(this.template).append(
      this.collection.map(function(song){
        return new SongListItemView({model: song}).render();
      })
    );
  }

});