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
      Alloy.Globals.user = e.users[0];
      $.main = Alloy.createController('main');
      $.login.parent.add($.main.getView());
      $.login.parent.remove($.login);
      $.main.init();
    } else {
      alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
    }
  });
});

$.signupBtnA.on('click', function(){
  Cloud.Users.create({
    email: $.emailA.value,
    password: $.passwordA.value,
    password_confirmation: $.passwordConfirm.value,
    first_name: $.firstName.value,
    last_name: $.lastName.value
  }, function (e) {
    if (e.success) {
      $.emailA.blur();
      $.passwordA.blur();
      $.passwordConfirm.blur();
      $.firstName.blur();
      $.lastName.blur();
      var user = e.users[0];
      Alloy.Globals.user = e.users[0];
      $.main = Alloy.createController('main');
      $.login.parent.add($.main.getView());
      $.login.parent.remove($.login);
      $.main.init();
    } else {
      alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
    }
  });
});

$.loginContents.on('click', function(){
  $.email.blur();
  $.password.blur();
});

$.signupContents.on('click', function(){
  $.emailA.blur();
  $.passwordA.blur();
  $.passwordConfirm.blur();
  $.firstName.blur();
  $.lastName.blur();
});

$.signupBtn.on('click', function(){
  $.signupContents.show();
  $.loginContents.hide();
});

$.loginBtnA.on('click', function(){
  $.loginContents.show();
  $.signupContents.hide();
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

  $.emailA.on('focus', moveScrollerUp);
  $.passwordA.on('focus', moveScrollerUp);
  $.passwordConfirm.on('focus', moveScrollerUp);
  $.firstName.on('focus', moveScrollerUp);
  $.lastName.on('focus', moveScrollerUp);

  $.emailA.on('blur', moveScrollerDown);
  $.passwordA.on('blur', moveScrollerDown);
  $.passwordConfirm.on('blur', moveScrollerDown);
  $.firstName.on('blur', moveScrollerDown);
  $.lastName.on('blur', moveScrollerDown);

  function moveScrollerUp() {
    doScroll(-150);
  }

  function moveScrollerDown() {
    doScroll(150);
  }
}

$.init = function() {
};