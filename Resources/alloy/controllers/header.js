function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.header = A$(Ti.UI.createView({
        backgroundColor: "#ccc",
        height: "40dp",
        width: Ti.UI.FILL,
        top: 0,
        id: "header"
    }), "View", null);
    $.addTopLevelView($.__views.header);
    $.__views.profile = A$(Ti.UI.createView({
        height: "30dp",
        width: "42dp",
        left: 0,
        id: "profile"
    }), "View", $.__views.header);
    $.__views.header.add($.__views.profile);
    $.__views.profileImage = A$(Ti.UI.createImageView({
        height: "30dp",
        width: "42dp",
        left: "5dp",
        touchEnabled: !0,
        image: "/images/usr.png",
        id: "profileImage"
    }), "ImageView", $.__views.profile);
    $.__views.profile.add($.__views.profileImage);
    $.__views.logo = A$(Ti.UI.createView({
        height: "30dp",
        width: "100dp",
        id: "logo"
    }), "View", $.__views.header);
    $.__views.header.add($.__views.logo);
    $.__views.smallLogo = A$(Ti.UI.createImageView({
        height: "30dp",
        width: "100dp",
        touchEnabled: !0,
        image: "/images/sm-logo.png",
        zIndex: 3,
        id: "smallLogo"
    }), "ImageView", $.__views.logo);
    $.__views.logo.add($.__views.smallLogo);
    $.__views.add = A$(Ti.UI.createView({
        height: "30dp",
        width: "63dp",
        right: 0,
        id: "add"
    }), "View", $.__views.header);
    $.__views.header.add($.__views.add);
    $.__views.addImage = A$(Ti.UI.createButton({
        height: "30dp",
        width: "53dp",
        right: "5dp",
        touchEnabled: !0,
        image: "/images/add.png",
        id: "addImage"
    }), "Button", $.__views.add);
    $.__views.add.add($.__views.addImage);
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    $.addImage.on("click", function() {
        var preview = Alloy.Globals.preview, imagePreview = Alloy.Globals.imagePreview, photosList = Alloy.Globals.photosList, od = Ti.UI.createOptionDialog({
            cancel: 2,
            options: [ "Camera", "Choose From Library...", "Cancel" ]
        });
        od.show();
        od.addEventListener("click", function(e) {
            var callbacks = {
                success: function(e) {
                    currentBlob = e.media;
                    preview.image = currentBlob;
                    Alloy.Globals.previewBlob = currentBlob;
                    imagePreview.visible = !0;
                    imagePreview.animate({
                        opacity: 1,
                        duration: 250
                    });
                },
                error: function(e) {
                    alert(e);
                }
            };
            e.index === 0 ? Ti.Media.showCamera(callbacks) : e.index === 1 && Ti.Media.openPhotoGallery(callbacks);
        });
    });
    $.profileImage.on("click", function() {
        var od = Ti.UI.createOptionDialog({
            cancel: 1,
            options: [ "Logout", "Cancel" ]
        });
        od.show();
        od.addEventListener("click", function(e) {
            e.index === 0 && Cloud.Users.logout(function(e) {
                if (e.success) {
                    $.login = Alloy.createController("login");
                    $.header.parent.parent.remove($.header.parent);
                    $.header.parent.parent.add($.login.getView());
                    $.login.init();
                } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;