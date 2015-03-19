Template.homeLiveFeed.helpers({
  feeds: function () {
    return Feeds.find().fetch();
  }
});