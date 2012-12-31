
$.login = Alloy.createController('login');

$.index.add($.login.getView());
$.login.init();

$.index.open();