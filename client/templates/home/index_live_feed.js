Template.indexLifeFeed.helpers({
  feeds: function () {
    return Feeds.find().fetch();
  }
});