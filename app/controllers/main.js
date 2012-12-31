var Cloud = require('ti.cloud');
// Cloud.debug = true;  // optional; if you add this line, set it to false for production

Alloy.Globals.imagePreview = $.imagePreview;
Alloy.Globals.preview = $.preview;
Alloy.Globals.photosList = $.photosList;
Alloy.Globals.curViewImg = null;

$.init = function() {
  Cloud.Photos.query({
    page: 1,
    per_page: 1000,
    order: '-updated_at'
  }, function (e) {
    if (e.success) {
      var data = [];
      for (var i = 0, l = e.photos.length; i<l; i++) {
        var photo = e.photos[i];
        if (photo && !photo.processed) continue;
        var image = Ti.UI.createImageView({
          image:photo.urls['medium_500'],
          backgroundColor:'#484850',
          width:'75dp',
          height:'75dp',
          top:'2dp',
          bottom:'2dp',
          left:'2dp',
          right:'2dp',
          borderColor:'#fff',
          borderWidth:'1dp',
          accessibilityValue:i
        });
        $.photosList.add(image);
        image.addEventListener('singletap', imageView);
      }
    } else {
      alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
    }
  });

};

$.submitBtn.on('click',function(){
  var previewBlob = Alloy.Globals.previewBlob;
  if (!previewBlob) {
    return false;
  }
  var data = {
    photo: previewBlob
  }
  data['photo_sync_sizes[]'] = 'medium_500';
  Cloud.Photos.create(data, function(e) {
    if (e.success) {
      $.imagePreview.animate({
        opacity:0,
        duration:250
      },function(){
        $.imagePreview.visible = false;
      });
      Alloy.Globals.previewBlob = null;
      var photo = e.photos[0];
      var newImage = Ti.UI.createImageView({
        image:photo.urls['medium_500'],
        backgroundColor:'#484850',
        width:'75dp',
        height:'75dp',
        top:'2dp',
        bottom:'2dp',
        left:'2dp',
        right:'2dp',
        borderColor:'#fff',
        borderWidth:'1dp',
        accessibilityValue:0
      });
      // reorder the photos list.
      var photoList = $.photosList.children.slice(0);
      for (var i = 0; i < photoList.length; ++i) {
        $.photosList.remove(photoList[i]);
      }
      $.photosList.add(newImage);
      newImage.addEventListener('singletap', imageView);
      for (var j = 0; j < photoList.length; ++j) {
        var image = Ti.UI.createImageView({
          image:photoList[j].image,
          backgroundColor:'#484850',
          width:'75dp',
          height:'75dp',
          top:'2dp',
          bottom:'2dp',
          left:'2dp',
          right:'2dp',
          borderColor:'#fff',
          borderWidth:'1dp',
          accessibilityValue:j+1
        });
        $.photosList.add(image);
        image.addEventListener('singletap', imageView);
      }
    }
    else {
      alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
    }
  });
});

$.cancelBtn.on('click', function(){
  $.imagePreview.animate({
    opacity:0,
    duration:250
  },function(){
    $.imagePreview.visible = false;
  });
});

$.clsImgView.on('click', function(){
  $.imageViewCtnr.animate({
    opacity:0,
    duration:250
  });
  $.imageViewCtnr.visible = false;
});

$.img.on('click', function(){
});

$.viewLeft.on('click', function(){
  var cvi = Alloy.Globals.curViewImg;
  if(cvi.accessibilityValue - 1 < 0){
    $.img.image = $.photosList.children[$.photosList.children.length - 1].image;
    Alloy.Globals.curViewImg = $.photosList.children[$.photosList.children.length - 1];
  }else{
    $.img.image = $.photosList.children[cvi.accessibilityValue - 1].image;
    Alloy.Globals.curViewImg = $.photosList.children[cvi.accessibilityValue - 1];
  }
});

$.viewRight.on('click', function(){
  var cvi = Alloy.Globals.curViewImg;
  if(cvi.accessibilityValue + 1 > $.photosList.children.length - 1){
    $.img.image = $.photosList.children[0].image;
    Alloy.Globals.curViewImg = $.photosList.children[0];
  }else{
    $.img.image = $.photosList.children[cvi.accessibilityValue + 1].image;
    Alloy.Globals.curViewImg = $.photosList.children[cvi.accessibilityValue + 1];
  }
});

function imageView() {
  Alloy.Globals.curViewImg = this;
  $.img.image = this.image;
  $.imageViewCtnr.visible = true;
  $.imageViewCtnr.animate({
    opacity:1,
    duration:250
  });
}
