// Template.profileIndex.created = function () {
//   this.autorun(function () {
//     this.subscription = Meteor.subscribe('user', Meteor.userId());
//   }.bind(this));
// };

// Template.profileIndex.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//     }
//   }.bind(this));

//   if (!Meteor.loggingIn() && !Meteor.user()) {
//     IonModal.open('signIn');
//   }
// };

// Template.profileIndex.helpers({
//   user: function () {
//     if (Meteor.userId()) {
//       return Meteor.user();
//     }
//   }
// });