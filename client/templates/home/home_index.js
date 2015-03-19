Template.ionBody.events({
  'click [data-activate-camera]': function () {
    MeteoricCamera.getPicture({quality: 100}, function(error, data){
      if (error) {
        return error;
      } else {
        var photoLocation = data;
        return data;
      }
    });
  }
});