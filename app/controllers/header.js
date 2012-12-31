var Cloud = require('ti.cloud');

// $.smallLogo.on('click', function() {
//   alert('logo');
// });

$.addImage.on('click', function() {
  var preview = Alloy.Globals.preview;
  var imagePreview = Alloy.Globals.imagePreview;
  var photosList = Alloy.Globals.photosList;

  var od = Ti.UI.createOptionDialog({
    cancel: 2,
    options: ['Camera', 'Choose From Library...', 'Cancel']
  });

  od.show();

  od.addEventListener('click', function(e) {
    var callbacks = {
      success: function(e) {
        currentBlob = e.media;
        preview.image = currentBlob;
        Alloy.Globals.previewBlob = currentBlob;
        imagePreview.visible = true;
        imagePreview.animate({
          opacity:1,
          duration:250
        });
      },
      error: function(e) {
        alert(e);
      }
    };
    
    //decide which media API to call
    if (e.index === 0) {
      Ti.Media.showCamera(callbacks);
    } else if (e.index === 1) {
      Ti.Media.openPhotoGallery(callbacks);
    }
  });
});

$.profileImage.on('click', function() {
  var od = Ti.UI.createOptionDialog({
    cancel: 1,
    options: ['Logout', 'Cancel']
  });

  od.show();

  od.addEventListener('click', function(e) {

    // logout
    if (e.index === 0) {
      Cloud.Users.logout(function (e) {
        if (e.success) {
          $.login = Alloy.createController('login');
          $.header.parent.parent.remove($.header.parent);
          $.header.parent.parent.add($.login.getView());
          $.login.init();
        } else {
          alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
      });
    }
  });

});
