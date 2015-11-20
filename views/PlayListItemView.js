var PlayListItemView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td><%= artist %></td><td><%= title %></td></td><td><%= playCount %></td>'),

  initialize: function() {

  },

  events: {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});