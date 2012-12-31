function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    _.extend($, $.__views);
    $.login = Alloy.createController("login");
    $.index.add($.login.getView());
    $.login.init();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;