var SongListItemView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
   // this.render();
  },

  events: {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});