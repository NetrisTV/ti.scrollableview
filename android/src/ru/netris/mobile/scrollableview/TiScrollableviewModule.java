package ru.netris.mobile.scrollableview;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

@Kroll.module(name = "TiScrollableview", id = "ru.netris.mobile.scrollableview")
public class TiScrollableviewModule extends KrollModule
{
	public static String PROPERTY_CLIP_VIEWS = "clipViews";

	public TiScrollableviewModule()
	{
		super();
	}
}
