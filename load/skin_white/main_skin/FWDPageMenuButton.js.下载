/* FWDS3DCovPageMenuButton */
(function (){
var FWDS3DCovPageMenuButton = function(
			label1, 
			label2,
			disableButton_bl
		){
		
		var self = this;
		var prototype = FWDS3DCovPageMenuButton.prototype;
		
		this.label_str1 = label1;
		this.label_str2 = label2;
		
		this.id;
		this.totalWidth = 240;
		this.totalHeight = 20;
		
		this.text_ndo = null;
		this.text_sdo = null;
		this.dumy_sdo = null;
		
		this.finalX;
		this.finalY;
		
		this.isMobile_bl = FWDRLS3DUtils.isMobile;
		this.disableButton_bl = disableButton_bl;
		this.currentState = 1;
		this.isDisabled_bl = false;
	
		
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.setBackfaceVisibility();
			self.setButtonMode(true);
			self.setupMainContainers();
			self.setWidth(self.totalWidth);
			self.setHeight(self.totalHeight);
			if(self.disableButton_bl) self.disable();
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		self.setupMainContainers = function(){
			
			self.text_ndo = new FWDS3DCovSimpleDisplayObject("div");
			self.text_ndo.getStyle().whiteSpace = "nowrap";
			self.text_ndo.setBackfaceVisibility();
			self.text_ndo.setDisplay("inline-block");
			self.text_ndo.getStyle().fontFamily = "myFont, Arial";
			self.text_ndo.getStyle().fontSize= "17px";
			self.text_ndo.getStyle().color = "#777777";
			self.text_ndo.getStyle().fontSmoothing = "antialiased";
			self.text_ndo.getStyle().webkitFontSmoothing = "antialiased";
			self.text_ndo.getStyle().textRendering = "optimizeLegibility";	
			self.text_ndo.setInnerHTML(self.label_str1);
			self.addChild(self.text_ndo);
			
			self.text_sdo = new FWDS3DCovSimpleDisplayObject("div");
			self.text_sdo.getStyle().whiteSpace = "nowrap";
			self.text_sdo.setBackfaceVisibility();
			self.text_sdo.setDisplay("inline-block");
			self.text_sdo.getStyle().fontFamily = "myFont, Arial";
			self.text_sdo.getStyle().fontSize= "17px";
			self.text_sdo.getStyle().fontSmoothing = "antialiased";
			self.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
			self.text_sdo.getStyle().textRendering = "optimizeLegibility";	
			self.text_sdo.setInnerHTML(self.label_str2);
			self.addChild(self.text_sdo);
			
			self.text_sdo.setAlpha(0);
			
			setTimeout(function(){
				self.centerText();
				self.setTotalWidth();
			}, 50);
			
			self.dumy_sdo = new FWDS3DCovSimpleDisplayObject("div");
			if(FWDRLS3DUtils.isIE){
				self.dumy_sdo.setBkColor("#FFFF00");
				self.dumy_sdo.setAlpha(0);
			};
			self.addChild(self.dumy_sdo);
			
			if(self.isMobile_bl){
				self.screen.addEventListener("click", self.onClick);
			}else if(self.screen.addEventListener){
				self.screen.addEventListener("mouseover", self.onMouseOver);
				self.screen.addEventListener("mouseout", self.onMouseOut);
				self.screen.addEventListener("click", self.onClick);
			}else if(self.screen.attachEvent){
				self.screen.attachEvent("onmouseover", self.onMouseOver);
				self.screen.attachEvent("onmouseout", self.onMouseOut);
				self.screen.attachEvent("onclick", self.onClick);
			}
		};
		
		self.onMouseOver = function(animate){
			if(self.isDisabled_bl) return;
			FWDS3DCovModTweenMax.to(self.text_ndo.screen, .5, {alpha:0, ease:Expo.easeOut});
			FWDS3DCovModTweenMax.to(self.text_sdo.screen, .5, {alpha:1, ease:Expo.easeOut});
		};
			
		self.onMouseOut = function(e){
			if(self.isDisabled_bl) return;
			FWDS3DCovModTweenMax.to(self.text_ndo.screen, .5, {alpha:1, ease:Expo.easeOut});
			FWDS3DCovModTweenMax.to(self.text_sdo.screen, .5, {alpha:0, ease:Expo.easeOut});
		};
		
		self.onClick = function(e){
			if(self.isDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			self.dispatchEvent(FWDS3DCovPageMenuButton.CLICK);
		};
		
		//##############################//
		/* set selected state */
		//##############################//
		self.disable = function(){
			self.isDisabled_bl = true;
			self.setButtonMode(false);
			
			FWDS3DCovModTweenMax.to(self.text_ndo.screen, .5, {alpha:0, ease:Expo.easeOut});
			FWDS3DCovModTweenMax.to(self.text_sdo.screen, .5, {alpha:1, ease:Expo.easeOut});
		};		

		//##########################################//
		/* center text */
		//##########################################//
		self.centerText = function(){
			self.dumy_sdo.setWidth(self.totalWidth);
			self.dumy_sdo.setHeight(self.totalHeight);
			
			if(FWDRLS3DUtils.isIEAndLessThen9 || FWDRLS3DUtils.isSafari){
				self.text_ndo.setY(Math.round((self.totalHeight - self.text_ndo.getHeight())/2) - 1);
			}else{
				self.text_ndo.setY(Math.round((self.totalHeight - self.text_ndo.getHeight())/2));
			}
			self.text_ndo.setHeight(self.totalHeight + 2);
			
			if(FWDRLS3DUtils.isIEAndLessThen9 || FWDRLS3DUtils.isSafari){
				self.text_sdo.setY(Math.round((self.totalHeight - self.text_sdo.getHeight())/2) - 1);
			}else{
				self.text_sdo.setY(Math.round((self.totalHeight - self.text_sdo.getHeight())/2));
			}
			self.text_sdo.setHeight(self.totalHeight + 2);
		};
		
		//###############################//
		/* get max text width */
		//###############################//
		self.setTotalWidth = function(){
			self.totalWidth = self.text_ndo.getWidth();
			self.dumy_sdo.setWidth(self.totalWidth);
		};
		
		self.init();
	};
	
	/* set prototype */
	FWDS3DCovPageMenuButton.setPrototype = function(){
		FWDS3DCovPageMenuButton.prototype = new FWDRLS3DDisplayObject("div");
	};

	FWDS3DCovPageMenuButton.CLICK = "onClick";
	
	FWDS3DCovPageMenuButton.prototype = null;
	window.FWDS3DCovPageMenuButton = FWDS3DCovPageMenuButton;
}(window));