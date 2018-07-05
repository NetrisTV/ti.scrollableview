var win = Ti.UI.createWindow({
  title: 'ScrollableView',
  backgroundColor:'#eee'
});

var label = Ti.UI.createLabel();
win.add(label);
win.open();

// Common params
var params = {
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

var view1 = Ti.UI.createView({ id: 'view1', backgroundColor: '#836' });
var view2 = Ti.UI.createView({ id: 'view2', backgroundColor: '#246' });
var view3 = Ti.UI.createView({ id: 'view3', backgroundColor: '#48b' });
scrollableView.setViews([view1, view2, view3]);

win.add(scrollableView);
