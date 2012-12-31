var Cloud = require('ti.cloud');
// Cloud.debug = true;  // optional; if you add this line, set it to false for production

$.loginBtn.on('click', function(){
  Cloud.Users.login({
    login: $.email.value,
    password: $.password.value
  }, function (e) {
    if (e.success) {
      $.email.blur();
      $.password.blur();
      var user = e.users[0];
      $.main = Alloy.createController('main');
      $.login.parent.add($.main.getView());
      $.login.parent.remove($.login);
      $.main.init();
    } else {
      alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
    }
  });
});
if (OS_IOS) {
  function doScroll(val, force) {
    //Short circuit to animation as quickly as possible
    if (!Alloy.isTablet) {
      $.login.animate({
        top:$.login.rect.y + val,
        duration:250
      });
    }
  }

  $.email.on('focus', moveScrollerUp);
  $.password.on('focus', moveScrollerUp);
  $.email.on('blur', moveScrollerDown);
  $.password.on('blur', moveScrollerDown);

  function moveScrollerUp() {
    doScroll(-150);
  }

  function moveScrollerDown() {
    doScroll(150);
  }
}

$.init = function() {
};