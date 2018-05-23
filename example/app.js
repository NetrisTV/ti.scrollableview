var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var label = Ti.UI.createLabel();
win.add(label);
win.open();


if (Ti.Platform.name == "android") {
    var ti_scrollableview = require('ru.netris.mobile.scrollableview');
	var scrollableView = ti_scrollableview.createScrollableView({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		top: 100,
		left: 150
	});
	win.add(scrollableView);
}
