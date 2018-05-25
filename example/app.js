var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var label = Ti.UI.createLabel();
win.add(label);
win.open();

var params = {
    top: 0,
    showPagingControl: true,
    pagingControlOnTop: true,
    pageIndicatorColor: "red",
    currentPageIndicatorColor: "black"
};

var scrollableView;
if (Ti.Platform.name == "android") {
    var module = require('ru.netris.mobile.scrollableview');
	scrollableView = module.createScrollableView(params);
} else {
    scrollableView = Titanium.UI.createScrollableView(params);
}

var view1 = Ti.UI.createView({ id: "view1", backgroundColor: "#836" });
var view2 = Ti.UI.createView({ id: "view2", backgroundColor: "#246" });
var view3 = Ti.UI.createView({ id: "view3", backgroundColor: "#48b" });
scrollableView.setViews([view1, view2, view3]);

win.add(scrollableView);
