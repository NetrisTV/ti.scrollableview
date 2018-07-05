# ti.scrollableview Module

## Description

A view that encapsulates a horizontally-scrolling set of child views,
known as pages, navigable using its built-in horizontal swipe gestures.

## Accessing the ti.scrollableview Module

To access this module from JavaScript, you would do the following:

    var module = require("ru.netris.mobile.scrollableview");

The `module` variable is a reference to the Module object.

## Reference

### module.createScrollableView

The `ScrollableView` supports an on-screen paging control to indicate
whether a previous or next page exists. When the paging control is
enabled, by default it appears as small dots on the bottom of the screen.

## Difference from original module

### Missing Properties for Android
This missing properties (in original [Ti.UI.ScrollableView](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ScrollableView) on Android), were
implemented:

#### clipViews
Determines whether the previous and next pages are clipped, so that they are not visible
adjacent to the current page.
Set to `false` to allow the previous or next pages to be seen. Note that
ScrollableView's [padding](#padding) must be set in order to make this property effective.

type: Boolean

#### currentPageIndicatorColor
Color for the current page of the paging control, as a color name or hex triplet.
For information about color values, see the "Colors" section of [Titanium.UI](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI).
type: String

default: undefined (50% white)

#### pagingControlOnTop
Determines whether the paging control is displayed at the top or bottom of the view.
Set to `true` for the paging control at the top.

type: Boolean

default: false
#### pageIndicatorColor
Color of the paging control, as a color name or hex triplet.
For information about color values, see the "Colors" section of [Titanium.UI](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI).

type: String

default: undefined (white)

### Additional properties
This properties don't exists in [Ti.UI.ScrollableView](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ScrollableView):

#### padding
Sets the padding of this ScrollableView.

type: [TextFieldPadding](https://docs.appcelerator.com/platform/latest/#!/api/TextFieldPadding)

## Usage

### Classic

    var scorlableView;
    var params = { ... };
    if (Titanium.Platform.osname === 'android') {
      var module = require("ru.netris.mobile.scrollableview");
      scorlableView = module.createScrollableView(params);
    } else {
      scorlableView = Titanium.UI.createScrollableView(params);
    }

### Alloy

scrollableview.xml:

    <Alloy>
        <Window title="Scrollable View">
            <ScrollableView id="scrollable" module="scrollableview" onScrollend="scrollableViewDidScroll">
                <View id="view1" backgroundColor="#836">
                    <Label>View 1</Label>
                </View>
                <View id="view2" backgroundColor="#246">
                    <Label>View 2</Label>
                </View>
                <View id="view3" backgroundColor="#48b">
                    <Label>View 3</Label>
                </View>
            </ScrollableView>
        </Window>
    </Alloy>

lib/scrollableview.js

    if (OS_ANDROID) {
      var module = require("ru.netris.mobile.scrollableview");
      exports.createScrollableView = function(params) {
        return module.createScrollableView(params);
      }
    }

## Author

Sergey Volkov <s.volkov@netris.ru>

## License

Apache 2.0, see [LICENSE](../LICENSE)
