$(function() {
  var songs = new Songs(songData);
  var songView = new SongListView({collection: songs});
  var playList = new PlayList();
  var playListView = new PlayListView({collection: playList});

  $('body').append([songView.$el, playListView.$el]);
});