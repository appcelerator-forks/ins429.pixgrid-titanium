function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.login = A$(Ti.UI.createView({
        height: "480dp",
        width: "320dp",
        id: "login"
    }), "View", null);
    $.addTopLevelView($.__views.login);
    $.__views.loginContents = A$(Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#efeeef",
        top: "10dp",
        width: "320dp",
        height: "480dp",
        id: "loginContents"
    }), "View", $.__views.login);
    $.__views.login.add($.__views.loginContents);
    $.__views.logo = A$(Ti.UI.createImageView({
        height: "150dp",
        width: "210dp",
        top: "10dp",
        bottom: 0,
        image: "/images/logo.png",
        id: "logo"
    }), "ImageView", $.__views.loginContents);
    $.__views.loginContents.add($.__views.logo);
    $.__views.emailWrapper = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "emailWrapper"
    }), "View", $.__views.loginContents);
    $.__views.loginContents.add($.__views.emailWrapper);
    $.__views.email = A$(Ti.UI.createTextField({
        backgroundColor: "white",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        hintText: "Email",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "email"
    }), "TextField", $.__views.emailWrapper);
    $.__views.emailWrapper.add($.__views.email);
    $.__views.passwordWrapper = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "30dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "passwordWrapper"
    }), "View", $.__views.loginContents);
    $.__views.loginContents.add($.__views.passwordWrapper);
    $.__views.password = A$(Ti.UI.createTextField({
        passwordMask: !0,
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        hintText: "••••",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "password"
    }), "TextField", $.__views.passwordWrapper);
    $.__views.passwordWrapper.add($.__views.password);
    $.__views.loginB = A$(Ti.UI.createView({
        top: "10dp",
        width: "200dp",
        height: "33dp",
        id: "loginB"
    }), "View", $.__views.loginContents);
    $.__views.loginContents.add($.__views.loginB);
    $.__views.loginBtn = A$(Ti.UI.createButton({
        width: "200dp",
        height: "33dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/login.png",
        title: "Login",
        id: "loginBtn"
    }), "Button", $.__views.loginB);
    $.__views.loginB.add($.__views.loginBtn);
    $.__views.border = A$(Ti.UI.createView({
        top: "10dp",
        width: "100%",
        height: "2px",
        id: "border"
    }), "View", $.__views.loginContents);
    $.__views.loginContents.add($.__views.border);
    $.__views.borderT = A$(Ti.UI.createView({
        width: "100%",
        height: "1px",
        borderTop: !1,
        borderBottom: !0,
        borderWidth: "1px",
        borderColor: "#666",
        id: "borderT"
    }), "View", $.__views.border);
    $.__views.border.add($.__views.borderT);
    $.__views.borderB = A$(Ti.UI.createView({
        top: "2px",
        width: "100%",
        height: "1px",
        borderTop: !1,
        borderBottom: !0,
        borderWidth: "1px",
        borderColor: "#fff",
        id: "borderB"
    }), "View", $.__views.border);
    $.__views.border.add($.__views.borderB);
    $.__views.signupB = A$(Ti.UI.createView({
        top: "10dp",
        width: "200dp",
        height: "33dp",
        id: "signupB"
    }), "View", $.__views.loginContents);
    $.__views.loginContents.add($.__views.signupB);
    $.__views.signupBtn = A$(Ti.UI.createButton({
        width: "200dp",
        height: "33dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/signup.png",
        title: "Sign up",
        id: "signupBtn"
    }), "Button", $.__views.signupB);
    $.__views.signupB.add($.__views.signupBtn);
    $.__views.signupContents = A$(Ti.UI.createScrollView({
        visible: !1,
        layout: "vertical",
        backgroundColor: "#efeeef",
        top: "10dp",
        width: "320dp",
        height: Ti.UI.SIZE,
        id: "signupContents"
    }), "ScrollView", $.__views.login);
    $.__views.login.add($.__views.signupContents);
    $.__views.__alloyId1 = A$(Ti.UI.createImageView({
        height: "150dp",
        width: "210dp",
        top: "10dp",
        bottom: 0,
        image: "/images/logo.png",
        id: "__alloyId1"
    }), "ImageView", $.__views.signupContents);
    $.__views.signupContents.add($.__views.__alloyId1);
    $.__views.emailWrapperA = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "emailWrapperA"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.emailWrapperA);
    $.__views.emailA = A$(Ti.UI.createTextField({
        backgroundColor: "white",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        hintText: "Email",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "emailA"
    }), "TextField", $.__views.emailWrapperA);
    $.__views.emailWrapperA.add($.__views.emailA);
    $.__views.passwordWrapperA = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "passwordWrapperA"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.passwordWrapperA);
    $.__views.passwordA = A$(Ti.UI.createTextField({
        passwordMask: !0,
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        hintText: "••••",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "passwordA"
    }), "TextField", $.__views.passwordWrapperA);
    $.__views.passwordWrapperA.add($.__views.passwordA);
    $.__views.passwordConfirmWrapper = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "passwordConfirmWrapper"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.passwordConfirmWrapper);
    $.__views.passwordConfirm = A$(Ti.UI.createTextField({
        passwordMask: !0,
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        hintText: "••••",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "passwordConfirm"
    }), "TextField", $.__views.passwordConfirmWrapper);
    $.__views.passwordConfirmWrapper.add($.__views.passwordConfirm);
    $.__views.firstNameWrapper = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "firstNameWrapper"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.firstNameWrapper);
    $.__views.firstName = A$(Ti.UI.createTextField({
        backgroundColor: "white",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        hintText: "First name",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "firstName"
    }), "TextField", $.__views.firstNameWrapper);
    $.__views.firstNameWrapper.add($.__views.firstName);
    $.__views.lastNameWrapper = A$(Ti.UI.createView({
        backgroundColor: "white",
        top: "10dp",
        width: "300dp",
        height: "36dp",
        borderColor: "#585858",
        borderRadius: "3",
        id: "lastNameWrapper"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.lastNameWrapper);
    $.__views.lastName = A$(Ti.UI.createTextField({
        backgroundColor: "white",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        hintText: "Last name",
        width: "280dp",
        height: "30dp",
        top: "3dp",
        bottom: "3dp",
        left: "10dp",
        right: "10dp",
        id: "lastName"
    }), "TextField", $.__views.lastNameWrapper);
    $.__views.lastNameWrapper.add($.__views.lastName);
    $.__views.signupBA = A$(Ti.UI.createView({
        top: "10dp",
        width: "200dp",
        height: "33dp",
        id: "signupBA"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.signupBA);
    $.__views.signupBtnA = A$(Ti.UI.createButton({
        width: "200dp",
        height: "33dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/signup.png",
        title: "Sign up",
        id: "signupBtnA"
    }), "Button", $.__views.signupBA);
    $.__views.signupBA.add($.__views.signupBtnA);
    $.__views.border = A$(Ti.UI.createView({
        top: "10dp",
        width: "100%",
        height: "2px",
        id: "border"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.border);
    $.__views.borderT = A$(Ti.UI.createView({
        width: "100%",
        height: "1px",
        borderTop: !1,
        borderBottom: !0,
        borderWidth: "1px",
        borderColor: "#666",
        id: "borderT"
    }), "View", $.__views.border);
    $.__views.border.add($.__views.borderT);
    $.__views.borderB = A$(Ti.UI.createView({
        top: "2px",
        width: "100%",
        height: "1px",
        borderTop: !1,
        borderBottom: !0,
        borderWidth: "1px",
        borderColor: "#fff",
        id: "borderB"
    }), "View", $.__views.border);
    $.__views.border.add($.__views.borderB);
    $.__views.loginBA = A$(Ti.UI.createView({
        top: "10dp",
        width: "200dp",
        height: "33dp",
        id: "loginBA"
    }), "View", $.__views.signupContents);
    $.__views.signupContents.add($.__views.loginBA);
    $.__views.loginBtnA = A$(Ti.UI.createButton({
        width: "200dp",
        height: "33dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/login.png",
        title: "Login",
        id: "loginBtnA"
    }), "Button", $.__views.loginBA);
    $.__views.loginBA.add($.__views.loginBtnA);
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    $.loginBtn.on("click", function() {
        Cloud.Users.login({
            login: $.email.value,
            password: $.password.value
        }, function(e) {
            if (e.success) {
                $.email.blur();
                $.password.blur();
                var user = e.users[0];
                Alloy.Globals.user = e.users[0];
                $.main = Alloy.createController("main");
                $.login.parent.add($.main.getView());
                $.login.parent.remove($.login);
                $.main.init();
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    $.signupBtnA.on("click", function() {
        Cloud.Users.create({
            email: $.emailA.value,
            password: $.passwordA.value,
            password_confirmation: $.passwordConfirm.value,
            first_name: $.firstName.value,
            last_name: $.lastName.value
        }, function(e) {
            if (e.success) {
                $.emailA.blur();
                $.passwordA.blur();
                $.passwordConfirm.blur();
                $.firstName.blur();
                $.lastName.blur();
                var user = e.users[0];
                Alloy.Globals.user = e.users[0];
                $.main = Alloy.createController("main");
                $.login.parent.add($.main.getView());
                $.login.parent.remove($.login);
                $.main.init();
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    $.loginContents.on("click", function() {
        $.email.blur();
        $.password.blur();
    });
    $.signupContents.on("click", function() {
        $.emailA.blur();
        $.passwordA.blur();
        $.passwordConfirm.blur();
        $.firstName.blur();
        $.lastName.blur();
    });
    $.signupBtn.on("click", function() {
        $.signupContents.show();
        $.loginContents.hide();
    });
    $.loginBtnA.on("click", function() {
        $.loginContents.show();
        $.signupContents.hide();
    });
    function doScroll(val, force) {
        Alloy.isTablet || $.login.animate({
            top: $.login.rect.y + val,
            duration: 250
        });
    }
    $.email.on("focus", moveScrollerUp);
    $.password.on("focus", moveScrollerUp);
    $.email.on("blur", moveScrollerDown);
    $.password.on("blur", moveScrollerDown);
    $.emailA.on("focus", moveScrollerUp);
    $.passwordA.on("focus", moveScrollerUp);
    $.passwordConfirm.on("focus", moveScrollerUp);
    $.firstName.on("focus", moveScrollerUp);
    $.lastName.on("focus", moveScrollerUp);
    $.emailA.on("blur", moveScrollerDown);
    $.passwordA.on("blur", moveScrollerDown);
    $.passwordConfirm.on("blur", moveScrollerDown);
    $.firstName.on("blur", moveScrollerDown);
    $.lastName.on("blur", moveScrollerDown);
    function moveScrollerUp() {
        doScroll(-150);
    }
    function moveScrollerDown() {
        doScroll(150);
    }
    $.init = function() {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;