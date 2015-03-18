Template.indexLifeFeed.helpers({
  feeds: function () {
    return Feeds.find().fetch();
  }
});

Template.indexLifeFeed.events({
  'click [data-activate-camera]': function () {
    MeteoricCamera.getPicture(function(error, data){
      return data;
    });
  }
});