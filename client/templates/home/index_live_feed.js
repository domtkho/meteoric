Template.indexLifeFeed.helpers({
  feeds: function () {
    return Feeds.find().fetch();
  }
});

Template.indexLifeFeed.events({
  'click [data-activate-camera]': function () {
    MeteoricCamera.getPicture(function(error, data){
      if (error) {
        return error;
      } else {
        console.log(data);
        return data;
      }
    });
  }
});