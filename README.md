# ti.scrollableview Module
## Description

ScrollableView is a view that encapsulates a horizontally-scrolling set of child views,
known as pages, navigable using its built-in horizontal swipe gestures.

This module implements this missing properies of Android version of
[Ti.UI.ScrollView](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ScrollView):
* clipViews
* currentPageIndicatorColor
* pagingControlOnTop
* pageIndicatorColor
See [documentation](documentation/index.md) for more information.

Also it provides nice-looking `ink page indicator` aka paging control.

![](demo.webm)

## Installation

* Grab the latest package from the releases page
* Install it following [this guide](https://docs.appcelerator.com/platform/latest/#!/guide/Using_Modules)
* with [gittio](http://gitt.io/): `$ gittio install ru.netris.mobile.scrollableview`

## Usage

```javascript
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

```