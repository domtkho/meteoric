Router.configure({
  layoutTemplate: 'layout',
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('loginIndex', { layoutTemplate: 'layoutLogin' });
  this.route('homeIndex', {path: '/'});
  this.route('postIndex');
  this.route('profileIndex');
  this.route('budgetIndex');
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
      IonLoading.show();
    } else {
      this.render('loginIndex');
    }
  } else {
    IonLoading.hide();
    this.next();
  }
};

Router.onBeforeAction(requireLogin);