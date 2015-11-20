$(function() {
  var songs = new Songs(songData);
  var songView = new SongListView({collection: songs});
  var playList = new PlayList();
  var playListView = new PlayListView({collection: playList});

  songs.on("addToPlayList", function(song){
    console.log("called addtoplaylist");
      playList.add(song);
    console.log("length", playList.length);
  });

  songs.on("removeFromPlayList", function(song) {
    console.log("called remove");
    playList.remove(song);
  });

  $('body').append([songView.$el, playListView.$el]);
});