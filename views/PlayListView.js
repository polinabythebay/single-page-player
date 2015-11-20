var PlayListView = Backbone.View.extend({

  tagName: 'table',

  template: _.template('<th>Artist</th><th>Title</th></th><th>PlayCount</th>'),

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);
  },

  render: function() {

    this.$el.children().detach();

    return this.$el.html(this.template).append(
      this.collection.map(function(song) {
        return new PlayListItemView({model: song}).render();
      })
    );
  }
})