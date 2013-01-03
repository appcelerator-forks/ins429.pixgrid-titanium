function Controller() {
    function imageView() {
        Alloy.Globals.curViewImg = this;
        $.img.image = this.image;
        $.imageViewCtnr.visible = !0;
        $.imageViewCtnr.animate({
            opacity: 1,
            duration: 250
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.main = A$(Ti.UI.createView({
        id: "main"
    }), "View", null);
    $.addTopLevelView($.__views.main);
    $.__views.header = Alloy.createController("header", {
        id: "header"
    });
    $.__views.header.setParent($.__views.main);
    $.__views.content = A$(Ti.UI.createView({
        top: "40db",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "content"
    }), "View", $.__views.main);
    $.__views.main.add($.__views.content);
    $.__views.phtSV = A$(Ti.UI.createScrollView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "phtSV"
    }), "ScrollView", $.__views.content);
    $.__views.content.add($.__views.phtSV);
    $.__views.photosList = A$(Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        backgroundColor: "#999",
        layout: "horizontal",
        id: "photosList"
    }), "View", $.__views.phtSV);
    $.__views.phtSV.add($.__views.photosList);
    $.__views.imagePreview = A$(Ti.UI.createView({
        visible: !1,
        opacity: 0,
        width: "100%",
        height: "90%",
        id: "imagePreview"
    }), "View", $.__views.main);
    $.__views.main.add($.__views.imagePreview);
    $.__views.__alloyId2 = A$(Ti.UI.createView({
        opacity: 0.8,
        width: "90%",
        height: "90%",
        backgroundColor: "#484850",
        id: "__alloyId2"
    }), "View", $.__views.imagePreview);
    $.__views.imagePreview.add($.__views.__alloyId2);
    $.__views.preview = A$(Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "preview"
    }), "ImageView", $.__views.imagePreview);
    $.__views.imagePreview.add($.__views.preview);
    $.__views.sbmcnl = A$(Ti.UI.createView({
        width: "200dp",
        height: "26dp",
        bottom: "7%",
        id: "sbmcnl"
    }), "View", $.__views.imagePreview);
    $.__views.imagePreview.add($.__views.sbmcnl);
    $.__views.submitBtn = A$(Ti.UI.createButton({
        width: "90dp",
        height: "24dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "14dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/login.png",
        left: 0,
        title: "Submit",
        id: "submitBtn"
    }), "Button", $.__views.sbmcnl);
    $.__views.sbmcnl.add($.__views.submitBtn);
    $.__views.cancelBtn = A$(Ti.UI.createButton({
        width: "90dp",
        height: "24dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "14dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/signup.png",
        left: "110dp",
        title: "Cancel",
        id: "cancelBtn"
    }), "Button", $.__views.sbmcnl);
    $.__views.sbmcnl.add($.__views.cancelBtn);
    $.__views.imageViewCtnr = A$(Ti.UI.createView({
        visible: !1,
        opacity: 0,
        width: "100%",
        height: "90%",
        id: "imageViewCtnr"
    }), "View", $.__views.main);
    $.__views.main.add($.__views.imageViewCtnr);
    $.__views.clsImgView = A$(Ti.UI.createView({
        width: "16dp",
        height: "16dp",
        top: "5%",
        right: "5%",
        touchEnabled: !0,
        zIndex: 3,
        id: "clsImgView"
    }), "View", $.__views.imageViewCtnr);
    $.__views.imageViewCtnr.add($.__views.clsImgView);
    $.__views.clsBtn = A$(Ti.UI.createButton({
        width: "20dp",
        height: "20dp",
        touchEnabled: !0,
        backgroundImage: "/images/close.png",
        id: "clsBtn"
    }), "Button", $.__views.clsImgView);
    $.__views.clsImgView.add($.__views.clsBtn);
    $.__views.__alloyId3 = A$(Ti.UI.createView({
        opacity: 0.8,
        width: "90%",
        height: "90%",
        backgroundColor: "#484850",
        id: "__alloyId3"
    }), "View", $.__views.imageViewCtnr);
    $.__views.imageViewCtnr.add($.__views.__alloyId3);
    $.__views.img = A$(Ti.UI.createImageView({
        width: "85%",
        height: "85%",
        id: "img"
    }), "ImageView", $.__views.imageViewCtnr);
    $.__views.imageViewCtnr.add($.__views.img);
    $.__views.__alloyId4 = A$(Ti.UI.createView({
        id: "__alloyId4"
    }), "View", $.__views.imageViewCtnr);
    $.__views.imageViewCtnr.add($.__views.__alloyId4);
    $.__views.viewLeft = A$(Ti.UI.createImageView({
        width: "20dp",
        height: "20dp",
        bottom: "5%",
        left: "10%",
        backgroundImage: "/images/left.png",
        id: "viewLeft"
    }), "ImageView", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.viewLeft);
    $.__views.removeBtn = A$(Ti.UI.createImageView({
        id: "removeBtn"
    }), "ImageView", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.removeBtn);
    $.__views.viewRight = A$(Ti.UI.createImageView({
        width: "20dp",
        height: "20dp",
        bottom: "5%",
        right: "10%",
        backgroundImage: "/images/right.png",
        id: "viewRight"
    }), "ImageView", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.viewRight);
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    Alloy.Globals.imagePreview = $.imagePreview;
    Alloy.Globals.preview = $.preview;
    Alloy.Globals.photosList = $.photosList;
    Alloy.Globals.curViewImg = null;
    $.init = function() {
        Cloud.Photos.query({
            page: 1,
            per_page: 1000,
            order: "-updated_at",
            where: "{\"user_id\":\"" + Alloy.Globals.user.id + "\"}"
        }, function(e) {
            if (e.success) {
                var data = [];
                for (var i = 0, l = e.photos.length; i < l; i++) {
                    var photo = e.photos[i];
                    if (photo && !photo.processed) continue;
                    var image = Ti.UI.createImageView({
                        image: photo.urls.medium_500,
                        backgroundColor: "#484850",
                        width: "75dp",
                        height: "75dp",
                        top: "2dp",
                        bottom: "2dp",
                        left: "2dp",
                        right: "2dp",
                        borderColor: "#fff",
                        borderWidth: "1dp",
                        accessibilityValue: i
                    });
                    $.photosList.add(image);
                    image.addEventListener("singletap", imageView);
                }
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    };
    $.submitBtn.on("click", function() {
        var previewBlob = Alloy.Globals.previewBlob;
        if (!previewBlob) return !1;
        var data = {
            photo: previewBlob
        };
        data["photo_sync_sizes[]"] = "medium_500";
        Cloud.Photos.create(data, function(e) {
            if (e.success) {
                $.imagePreview.animate({
                    opacity: 0,
                    duration: 250
                }, function() {
                    $.imagePreview.visible = !1;
                });
                Alloy.Globals.previewBlob = null;
                var photo = e.photos[0], newImage = Ti.UI.createImageView({
                    image: photo.urls.medium_500,
                    backgroundColor: "#484850",
                    width: "75dp",
                    height: "75dp",
                    top: "2dp",
                    bottom: "2dp",
                    left: "2dp",
                    right: "2dp",
                    borderColor: "#fff",
                    borderWidth: "1dp",
                    accessibilityValue: 0
                }), photoList = $.photosList.children.slice(0);
                for (var i = 0; i < photoList.length; ++i) $.photosList.remove(photoList[i]);
                $.photosList.add(newImage);
                newImage.addEventListener("singletap", imageView);
                for (var j = 0; j < photoList.length; ++j) {
                    var image = Ti.UI.createImageView({
                        image: photoList[j].image,
                        backgroundColor: "#484850",
                        width: "75dp",
                        height: "75dp",
                        top: "2dp",
                        bottom: "2dp",
                        left: "2dp",
                        right: "2dp",
                        borderColor: "#fff",
                        borderWidth: "1dp",
                        accessibilityValue: j + 1
                    });
                    $.photosList.add(image);
                    image.addEventListener("singletap", imageView);
                }
            } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    $.cancelBtn.on("click", function() {
        $.imagePreview.animate({
            opacity: 0,
            duration: 250
        }, function() {
            $.imagePreview.visible = !1;
        });
    });
    $.clsImgView.on("click", function() {
        $.imageViewCtnr.animate({
            opacity: 0,
            duration: 250
        });
        $.imageViewCtnr.visible = !1;
    });
    $.img.on("click", function() {});
    $.viewLeft.on("click", function() {
        var cvi = Alloy.Globals.curViewImg;
        if (cvi.accessibilityValue - 1 < 0) {
            $.img.image = $.photosList.children[$.photosList.children.length - 1].image;
            Alloy.Globals.curViewImg = $.photosList.children[$.photosList.children.length - 1];
        } else {
            $.img.image = $.photosList.children[cvi.accessibilityValue - 1].image;
            Alloy.Globals.curViewImg = $.photosList.children[cvi.accessibilityValue - 1];
        }
    });
    $.viewRight.on("click", function() {
        var cvi = Alloy.Globals.curViewImg;
        if (cvi.accessibilityValue + 1 > $.photosList.children.length - 1) {
            $.img.image = $.photosList.children[0].image;
            Alloy.Globals.curViewImg = $.photosList.children[0];
        } else {
            $.img.image = $.photosList.children[cvi.accessibilityValue + 1].image;
            Alloy.Globals.curViewImg = $.photosList.children[cvi.accessibilityValue + 1];
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;