var win = Ti.UI.createWindow({
  title: 'ScrollableView',
  backgroundColor:'#000'
});

var label = Ti.UI.createLabel();
win.add(label);
win.open();

// Common params
var params = {
  backgroundColor: '#fff',
  height: Ti.UI.SIZE,
  cacheSize: 3,
  clipViews: false,
  currentPageIndicatorColor: '#000',
  pageIndicatorColor: '#f00',
  pagingControlOnTop: false,
  showPagingControl: true,
  top: 0
};

var scrollableView;
if (Ti.Platform.name === 'android') {
  // Android specific params
  params.padding = {
    left: 40,
    right: 40
  };
  var module = require('ru.netris.mobile.scrollableview');
  scrollableView = module.createScrollableView(params);
} else {
  // iOS specific params
  params.overlayEnabled = true;
  params.width = '90%';
  scrollableView = Titanium.UI.createScrollableView(params);
}

var view1 = Ti.UI.createView({ id: 'view1', backgroundColor: '#836', height: '200' });
var view2 = Ti.UI.createView({ id: 'view2', backgroundColor: '#246', height: '180' });
var view3 = Ti.UI.createView({ id: 'view3', backgroundColor: '#48b', height: '160' });
var view4 = Ti.UI.createView({ id: 'view3', backgroundColor: '#b84', height: '140' });
var view5 = Ti.UI.createView({ id: 'view3', backgroundColor: '#8b4', height: '120' });
scrollableView.setViews([view1, view2, view3, view4, view5]);

win.add(scrollableView);
