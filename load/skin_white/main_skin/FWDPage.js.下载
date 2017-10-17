var pageMenu_do;
var presetsMenu_do;
var pageThumbs_do;

var body_el = null;
var playlist1_el = null;
var playlist1SingleCat_el = null;
var myDiv_el = null;
var menuHolder_el = null;
var thumbsHolder_el = null;
var presetsHolder_el = null;
var presets_el = null;
var whyBuyImage_el = null;
var logoImage_img = null;
var byFWD_img = null;

var td_els;
var mainHeader_el = null;
var menuHolder_el = null;
var whatIsMainText_el = null;
var logoImage_img = null;
var whyBuyImage_img = null;
var mainFeatureTableHolder_el = null;
var col1_el = null;
var col2_el = null;
var specialNotes_el = null;

var mainWidth = 940;
var coverflowHeight = 538;
var gridWidth = 940;
var byFWDImageWidth = 76;
var logoImageWidth = 522;
var whatIsImageWidth = 415;
var whyBuyImageWidth = 940;
var windowW = 0;
var windowH = 0;

var resizeHandlerId_to;
var scrollEndId_to;

var buyButton;

//##################################//
/* initialize page */
//##################################//
function init(){

	body_el = document.getElementsByTagName('body')[0];
	playlist1_el = document.getElementById("playList1");
	playlist1SingleCat_el = document.getElementById("playList2SingleCat");
	menuHolder_el = document.getElementById("menuHolder");
	thumbsHolder_el = document.getElementById("thumbsHolder");
	presetsHolder_el = document.getElementById("presetsHolder");
	presets_el = document.getElementById("presets");
	myDiv_el = document.getElementById("myDiv");
	whyBuyImage_el = document.getElementById("whyBuy");
	logoImage_img = document.getElementById("logoImage");
	
	td_els = document.getElementsByTagName("td"); 
	specialNotes_el = document.getElementById("specialNotes");
	whatIsMainText_el = document.getElementById("whatIsMainText");
	mainFeatureTableHolder_el  = document.getElementById("mainFeatureTableHolder");
	col1_el = document.getElementById("col1");
	col2_el = document.getElementById("col2");
	mainHeader_el = document.getElementById("mainHeader");
	
	byFWD_img = document.getElementById("byFWD");
	byFWD_img.style.cursor = "pointer";
	byFWD_img.onclick = function(){
		window.location.href = "http://www.webdesign-flash.ro";
	};
	
	setupMenu();
	setupThumbsHolder();

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
		if(FWDRLS3DUtils.isFirefox){
			document.addEventListener("mozfullscreenchange", onFullScreenChange);
			document.removeEventListener("fullscreenchange", onFullScreenChange);
		}
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
	
	setupCoverflow();
	
	if (FWDRLS3DUtils.isIEAndLessThen10)
	{
		presets_el.style.display = "none";
	}
	else
	{
		setupPresets();
		
		coverflow.addListener(FWDSimple3DCoverflow.INTRO_START, onIntroStart);
		coverflow.addListener(FWDSimple3DCoverflow.INTRO_FINISH, onIntroFinish);
		coverflow.addListener(FWDSimple3DCoverflow.IS_API_READY, onApiReady);
	}
	
	positionStuff();
	
	setTimeout( function(){
		positionStuff();
		removePlayLists();
		}, 100);
}

//##################################//
/* Remove playlists for better performance */
//##################################//
function removePlayLists(){
	try{
		body_el.removeChild(playlist1_el);
	}catch(e){}
	
	try{
		body_el.removeChild(playlist1SingleCat_el);
	}catch(e){}
};

//##################################//
/* Full screen change handler */
//##################################//
function onFullScreenChange(e){
	var isFullScreen = document.fullScreen || !document.mozFullScreen;
	if(isFullScreen){
		clearTimeout(resizeHandlerId_to); 
		resizeHandlerId_to = setTimeout(positionStuff, 90);
	}
}

//#####################################//
/* resize handler */
//#####################################//
function onResizeHandler(){
	if(FWDRLS3DUtils.isMobile){
		clearTimeout(resizeHandlerId_to); 
		resizeHandlerId_to = setTimeout(positionStuff, 90);
	}else{
		positionStuff();
		if(FWDRLS3DUtils.isIE){
			clearTimeout(resizeHandlerId_to); 
			resizeHandlerId_to = setTimeout(positionStuff, 90);
		}
	}
}

//#####################################//
/* position stuff */
//#####################################//
function positionStuff(){
	var viewportSize = FWDRLS3DUtils.getViewportSize();
	windowW = menuHolder_el.offsetWidth;
	windowH = viewportSize.h;
	
	positionLogoImage();
	pageMenu_do.positionAndResize(windowW);
	
	if (presetsMenu_do)
	{
		presetsMenu_do.positionAndResize(windowW);
	}
	
	pageThumbs_do.positionAndResize(windowW);
	positionText();
	positionBuyButton();
}

//#####################################//
/* Setup menu */
//####################################//
function setupMenu(){
	FWDS3DCovPageMenu.setPrototype();
	pageMenu_do = new FWDS3DCovPageMenu({
		disabledButton:1,
		parent:menuHolder_el,
		menuLabels:["Classic <span class=\"black\">Black</span>", "<span class=\"blue\">Classic <span class=\"bold\">Black</span></span>",
		            "Classic <span class=\"white\">White</span>", "<span class=\"blue\">Classic <span class=\"bold\">White</span></span>",
		            "All Sizes <span class=\"black\">Black</span>", "<span class=\"blue\">All Sizes <span class=\"bold\">Black</span></span>",
		            "All Sizes <span class=\"white\">White</span>", "<span class=\"blue\">All Sizes <span class=\"bold\">White</span></span>",
					"<span class=\"black\">Transparent</span> Images", "<span class=\"blue\"><span class=\"bold\">Transparent</span> Images</span>",
					"<span class=\"black\">Infinite</span> Loop", "<span class=\"blue\"><span class=\"bold\">Infinite</span> Loop</span>"],
		maxWidth:mainWidth,
		buttonNormalColor:"#999999",
		buttonSelectedColor:"#009aff",
		buttonsHolderBackgroundColor:"#EEEEEE"
	});
	
	pageMenu_do.addListener(FWDS3DCovPageMenuButton.CLICK, buttonClickHandler);
}

function buttonClickHandler(e){
	if(e.id == 0){
		window.location.href = "index.html";
	}else if(e.id == 1){
		window.location.href = "index-classic-white.html";
	}else if(e.id == 2){
		window.location.href = "index-allsizes-black.html";
	}else if(e.id == 3){
		window.location.href = "index-allsizes-white.html";
	}else if(e.id == 4){
		window.location.href = "index-transparent-images.html";
	}else if(e.id == 5){
		window.location.href = "index-infinite-loop.html";
	}
};

//#####################################//
/* Setup presets menu*/
//####################################//
function setupPresets(){
	FWDS3DCovPresetsMenu.setPrototype();
	presetsMenu_do = new FWDS3DCovPresetsMenu(presetsHolder_el, false);
	
	presetsMenu_do.addListener(FWDS3DCovPresetsMenu.CHANGE, onPresetsChange);
	
	presetsMenu_do.disable();
}

function onPresetsChange(e)
{
	setPreset(e.id + 1);
};

function onIntroStart()
{
	if (presetsMenu_do)
	{
		presetsMenu_do.disable();
	}
};

function onIntroFinish()
{
	if (presetsMenu_do)
	{
		presetsMenu_do.enable();
	}
};

function onApiReady()
{
	setupBuyButton();
};

function setPreset(id)
{
	switch (id)
	{
		case 1:
			coverflow.setPreset([86, 78, 200, 93, 70, 100, 0, true, 0, true, 0, 0, "dualsided", "left", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]);
			break;
		case 2:
			coverflow.setPreset([80, 165, 400, 130, -40, 100, 0, true, 0, false, 0, 0, "dualsided", "left", "rgba(255, 255, 255, .4)", "rgba(255, 255, 255, 1)"]);
			break;
		case 3:
			coverflow.setPreset([86, 78, 200, 93, 2, 100, 0, true, 0, false, 0, 0, "dualsided", "left", "rgba(255, 255, 255, .4)", "rgba(255, 255, 255, 1)"]);
			break;
		case 4:
			coverflow.setPreset([100, 20, 150, 30, 60, 50, 0, true, 0, true, -15, 0, "dualsided", "left", "rgba(255, 255, 255, .4)", "rgba(255, 255, 255, 1)"]);
			break;
		case 5:
			coverflow.setPreset([240, 0, 0, 20, 0, 0, 0, true, 0, true, -15, 0, "onesided", "left", "rgba(255, 255, 255, .2)", "rgba(255, 255, 255, 1)"]);
			break;
		case 6:
			coverflow.setPreset([240, 0, 0, 20, 0, 0, 0, true, 0, true, -15, 0, "crosssided", "left", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, .2)"]);
			break;
		case 7:
			coverflow.setPreset([100, 30, 150, 60, 60, 50, 0, true, 0, true, -3, 0, "frontonesided", "left", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, .2)"]);
			break;
		case 8:
			coverflow.setPreset([86, 78, 200, 93, 70, 0, 0, true, 0, true, -10, 0, "accordion", "left", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)"]);
			break;
		case 9:
			coverflow.setPreset([86, 78, 200, 93, 70, 0, 0, true, 0, true, 0, -30, "flipping", "left", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)"]);
			break;
	}
};

//########################################//
/* Setup buy button */
//########################################//
function setupBuyButton()
{
	if (location.href.indexOf("webdesign-flash.ro") == -1)
		return;
	
	FWDBuyButton.setPrototype();
	buyButton = new FWDBuyButton("graphics/buy.png", "graphics/hello.png", 70, 70, 30, 60);
	buyButton.setX(0);
	body_el.appendChild(buyButton.screen);
	self.positionBuyButton();
}

function positionBuyButton()
{
	if (buyButton)
	{
		if (windowW < 6.00)
		{
			self.buyButton.setY(255);
		}
		else
		{
			self.buyButton.setY(27)
		}
	}
}

//#####################################//
/* Setup page thumbs */
//####################################//
function setupThumbsHolder(){
	FWDS3DCovPageThumbs.setPrototype();
	pageThumbs_do = new FWDS3DCovPageThumbs({
		parent:thumbsHolder_el,
		imagesPath:["graphics/imageFluid", 
		            "graphics/imageFixed"],
		
		labels:["Fixed width", 
		        "Fluid width"],
		thumbShadowPath:"cutout_round_silver_graphics/thumbShadow.jpg",
		maxWidth:mainWidth,
		thumbnailBorderColor:"#FFFFFF",
		textNormalColor:"#55595c",
		textSelectedColor:"#009aff",
		wiewSampleTextColor:"#FFFFFF",
		shadowOffsetX:2,
		shadowOffsetY:2,
		shadowOffsetW:-4,
		shadowOffsetH:-4
	});
	
	pageThumbs_do.addListener(FWDS3DCovPageThumb.CLICK, onThumbPressedHandler);
}

function onThumbPressedHandler(e){
	
	var newY;
	
	if(e.id == 0 || e.id == 1){
		if(coverflow){
			coverflow.destroy();
			coverflow = null;
		}
	}
	
	if (e.id == 0)
	{
		body_el.appendChild(playlist1_el);
		
		setupCoverflow();
	}
	else if (e.id == 1)
	{
		body_el.appendChild(playlist1SingleCat_el);
		
		setupCoverflow1();
	}
	
	coverflow.addListener(FWDSimple3DCoverflow.INTRO_START, onIntroStart);
	coverflow.addListener(FWDSimple3DCoverflow.INTRO_FINISH, onIntroFinish);
	
	if(e.id == 0 || e.id == 1){
		pageThumbs_do.enableOrDisableThumbs(e.id);
		scale = Math.min(windowW, gridWidth)/mainWidth;	
		newY = window.pageYOffset +  myDiv_el.getBoundingClientRect().top;
		newY -=  parseInt((windowH - (coverflowHeight * scale))/2);
		
		window.scrollTo(0, newY);
		
		if (presetsMenu_do)
		{
			presetsMenu_do.setPreset(0);
		}
	}	
}

//#####################################//
/* position logo image */
//#####################################//
function positionLogoImage(){
	var byFWDX = (windowW - byFWDImageWidth - 2);
	var logoImageX = parseInt((windowW - logoImageWidth)/2);
	
	if(byFWDX > mainWidth - byFWDImageWidth){
		byFWDX = parseInt((windowW + mainWidth)/2 - byFWDImageWidth);
	}
	
	if(windowW < 500){
		byFWD_img.style.top = "-50px";
	}else{
		byFWD_img.style.top = "103px";
	}
	
	logoImage_img.style.left = logoImageX  + "px";
	byFWD_img.style.left = byFWDX + "px";
};

//#####################################//
/* position text  */
//#####################################//
function positionText()
{
	var whatIsMainTextWidth = Math.min(mainWidth - 20, windowW - 20);
	var whatIsMainTextX = parseInt((windowW - whatIsMainTextWidth)/2);
	var colWidth = parseInt((Math.min(mainWidth, windowW) - 40)/2);
	var colHolderWidth = parseInt((Math.min(mainWidth, windowW) - 20));
	
	whatIsMainText_el.style.left = whatIsMainTextX  + "px";
	whatIsMainText_el.style.width = (whatIsMainTextWidth )  + "px";
	mainFeatureTableHolder_el.style.width = colHolderWidth + "px";
	specialNotes_el.style.left = whatIsMainTextX + "px";
	specialNotes_el.style.width = whatIsMainTextWidth + "px";
	
	for(var i=0; i<td_els.length; i++){
		if(windowW < 500){
			td_els[i].style.display = "block";
			if(i == 1){
				td_els[i].style.width = "0%";
			}else{
				td_els[i].style.width = "100%";
			}
			td_els[i].style.display = "block";
		}else{
			if(i == 0){
				td_els[i].style.width = "47%";
				td_els[i].style.display = "table-cell";
			}else if(i == 1){
				td_els[i].style.width = "6%";
				td_els[i].style.display = "table-cell";
			}else{
				td_els[i].style.width = "47%";
				td_els[i].style.display = "table-cell";
			}
		}
	}
}

//##########################################//
/* Setup coverflow's functions */
//#########################################//
function setupCoverflow1(){
	coverflow = new FWDSimple3DCoverflow(
	{
		//required settings
		coverflowHolderDivId:"myDiv",
		coverflowDataListDivId:"playList2SingleCat",
		displayType:"responsive",
		autoScale:"yes",
		coverflowWidth:940,
		coverflowHeight:538,
		mainFolderPath:"load",
		skinPath:"skin_white",
									
		//main settings
		backgroundColor:"#FFFFFF",
		backgroundImagePath:"",
		backgroundRepeat:"repeat-x",
		showDisplay2DAlways:"no",
		coverflowStartPosition:"center",
		coverflowTopology:"dualsided",
		coverflowXRotation:0,
		coverflowYRotation:0,
		numberOfThumbnailsToDisplayLeftAndRight:"all",
		infiniteLoop:"no",
		rightClickContextMenu:"default",
		useDragAndSwipe:"no",
									
		//thumbnail settings
		thumbnailWidth:400,
		thumbnailHeight:266,
		thumbnailXOffset3D:86,
		thumbnailXSpace3D:78,
		thumbnailZOffset3D:200,
		thumbnailZSpace3D:93,
		thumbnailYAngle3D:70,
		thumbnailXOffset2D:20,
		thumbnailXSpace2D:30,
		thumbnailHoverOffset:100,
		thumbnailBorderSize:0,
		thumbnailBackgroundColor:"#999999",
		thumbnailBorderColor1:"#FFFFFF",
		thumbnailBorderColor2:"#FFFFFF",
		transparentImages:"no",
		thumbnailsAlignment:"center",
		maxNumberOfThumbnailsOnMobile:13,
		showThumbnailsGradient:"yes",
		thumbnailGradientDirection:"left",
		thumbnailGradientColor1:"rgba(255, 255, 255, 0)",
		thumbnailGradientColor2:"rgba(255, 255, 255, 1)",
		showText:"yes",
		textOffset:10,
		showThumbnailBoxShadow:"yes",
		thumbnailBoxShadowCss:"0px 2px 2px #BBBBBB",
		showTooltip:"no",
		dynamicTooltip:"yes",
		showReflection:"yes",
		reflectionHeight:60,
		reflectionDistance:0,
		reflectionOpacity:.2,
							
		//controls settings
		slideshowDelay:5000,
		autoplay:"no",
		disableNextAndPrevButtonsOnMobile:"no",
		controlsMaxWidth:650,
		controlsPosition:"bottom",
		controlsOffset:10,
		showLargeNextAndPrevCoverflowButtons:"no",
		largeNextAndPrevButtonsOffest:20,
		showNextAndPrevCoverflowButtons:"yes",
		showSlideshowButton:"yes",
		showScrollbar:"yes",
		showBulletsNavigation:"no",
		bulletsNormalColor:"#999999",
		bulletsSelectedColor:"#000000",
		bulletsNormalRadius:5,
		bulletsSelectedRadius:8,
		spaceBetweenBullets:10,
		bulletsOffset:14,
		disableScrollbarOnMobile:"yes",
		enableMouseWheelScroll:"yes",
		scrollbarHandlerWidth:200,
		scrollbarTextColorNormal:"#000000",
		scrollbarTextColorSelected:"#FFFFFF",
		addKeyboardSupport:"yes",
									
		//categories settings
		showCategoriesMenu:"no",
		startAtCategory:1,
		categoriesMenuMaxWidth:700,
		categoriesMenuOffset:25,
		categoryColorNormal:"#999999",
		categoryColorSelected:"#000000",
									
		//lightbox settings
		buttonsAlignment:"in",
		itemBoxShadow:"none",
		descriptionWindowAnimationType:"opacity",
		descriptionWindowPosition:"bottom",
		slideShowAutoPlay:"no",
		addKeyboardSupport:"yes",
		showCloseButton:"yes",
		showShareButton:"yes",
		showZoomButton:"yes",
		showSlideShowButton:"yes",
		showSlideShowAnimation:"yes",
		showNextAndPrevButtons:"yes",
		showNextAndPrevButtonsOnMobile:"yes",
		showDescriptionButton:"yes",
		showDescriptionByDefault:"no",
		videoShowFullScreenButton:"yes",
		videoAutoPlay:"yes",
		nextVideoOrAudioAutoPlay:"yes",
		videoLoop:"no",
		audioAutoPlay:"no",
		audioLoop:"no",
		backgroundOpacity:.9,
		descriptionWindowBackgroundOpacity:.95,
		buttonsHideDelay:3,
		slideShowDelay:4,
		defaultItemWidth:640,
		defaultItemHeight:480,
		itemOffsetHeight:50,
		spaceBetweenButtons:1,
		buttonsOffsetIn:2,
		buttonsOffsetOut:5,
		itemBorderSize:0,
		itemBorderRadius:0,
		itemBackgroundColor:"#333333",
		itemBorderColor:"#333333",
		lightBoxBackgroundColor:"#000000",
		descriptionWindowBackgroundColor:"#FFFFFF",
		videoPosterBackgroundColor:"#0099FF",
		videoControllerBackgroundColor:"#FFFFFF",
		audioControllerBackgroundColor:"#FFFFFF",
		timeColor:"#000000"
	});
}