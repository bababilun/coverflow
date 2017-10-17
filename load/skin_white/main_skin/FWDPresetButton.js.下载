/* FWDS3DCovPresetButton */
(function (window){
var FWDS3DCovPresetButton = function(id, bWidth, bHeight, nImgUrl, sImgUrl)
{
		var self = this;
		var prototype = FWDS3DCovPresetButton.prototype;
		
		this.id = id;
		
		this.nImgUrl = nImgUrl;
		this.sImgUrl = sImgUrl;
		
		this.n_do;
		this.s_do;
		
		this.totalWidth = bWidth;
		this.totalHeight = bHeight;
		
		this.isMobile_bl = FWDRLS3DUtils.isMobile;
		this.hasPointerEvent_bl = FWDRLS3DUtils.hasPointerEvent;
		
		this.isEnabled = false;
		
		//##########################################//
		/* initialize this */
		//##########################################//
		this.init = function(){
			this.setupMainContainers();
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			this.n_do = new FWDS3DCovSimpleDisplayObject("img");
			this.n_do.screen.src = this.nImgUrl;
			this.s_do = new FWDS3DCovSimpleDisplayObject("img");
			this.s_do.screen.src = this.sImgUrl;
			
			this.addChild(this.s_do);
			this.addChild(this.n_do);
			
			this.setWidth(bWidth);
			this.setHeight(bHeight);
			
			this.n_do.setWidth(bWidth);
			this.n_do.setHeight(bHeight);
			
			this.s_do.setWidth(bWidth);
			this.s_do.setHeight(bHeight);
			
			self.enable();
		};
		
		this.onMouseOver = function(e){
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				FWDS3DCovModTweenMax.to(self.n_do, .9, {alpha:0, ease:Expo.easeOut});
			}
		};
			
		this.onMouseOut = function(e){
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				FWDS3DCovModTweenMax.to(self.n_do, .9, {alpha:1, ease:Expo.easeOut});
			}
		};
			
		this.onClick = function(e){
			self.dispatchEvent(FWDS3DCovPresetButton.CLICK, {id:self.id});
		};
		
		this.enable = function()
		{
			if (self.isEnabled)
				return;
			
			self.isEnabled = true;
			
			this.setButtonMode(true);
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.screen.addEventListener("MSPointerOver", self.onMouseOver);
					self.screen.addEventListener("MSPointerOut", self.onMouseOut);
					self.screen.addEventListener("MSPointerUp", self.onClick);
				}else{
					self.screen.addEventListener("click", self.onClick);
				}
			}else if(self.screen.addEventListener){	
				self.screen.addEventListener("mouseover", self.onMouseOver);
				self.screen.addEventListener("mouseout", self.onMouseOut);
				self.screen.addEventListener("mouseup", self.onClick);
			}else if(self.screen.attachEvent){
				self.screen.attachEvent("onmouseover", self.onMouseOver);
				self.screen.attachEvent("onmouseout", self.onMouseOut);
				self.screen.attachEvent("onmouseup", self.onClick);
			}
			
			FWDS3DCovModTweenMax.to(self, .1, {alpha:1, ease:Expo.easeOut});
		};
		
		this.disable = function()
		{
			if (!self.isEnabled)
				return;

			self.isEnabled = false;
		
			FWDS3DCovModTweenMax.to(self.n_do, .9, {alpha:1, ease:Expo.easeOut});
			
			this.setButtonMode(false);
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.screen.removeEventListener("MSPointerOver", self.onMouseOver);
					self.screen.removeEventListener("MSPointerOut", self.onMouseOut);
					self.screen.removeEventListener("MSPointerUp", self.onClick);
				}else{
					self.screen.removeEventListener("click", self.onClick);
				}
			}else if(self.screen.removeEventListener){	
				self.screen.removeEventListener("mouseover", self.onMouseOver);
				self.screen.removeEventListener("mouseout", self.onMouseOut);
				self.screen.removeEventListener("mouseup", self.onClick);
			}else if(self.screen.detachEvent){
				self.screen.detachEvent("onmouseover", self.onMouseOver);
				self.screen.detachEvent("onmouseout", self.onMouseOut);
				self.screen.detachEvent("onmouseup", self.onClick);
			}
			
			FWDS3DCovModTweenMax.to(self, .1, {alpha:.25, ease:Expo.easeOut});
		};
		
		//##############################//
		/* destroy */
		//##############################//
		this.destroy = function(){
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.screen.removeEventListener("MSPointerOver", self.onMouseOver);
					self.screen.removeEventListener("MSPointerOut", self.onMouseOut);
					self.screen.removeEventListener("MSPointerUp", self.onClick);
				}else{
					self.screen.removeEventListener("click", self.onClick);
				}
			}else if(self.screen.removeEventListener){	
				self.screen.removeEventListener("mouseover", self.onMouseOver);
				self.screen.removeEventListener("mouseout", self.onMouseOut);
				self.screen.removeEventListener("mouseup", self.onClick);
			}else if(self.screen.detachEvent){
				self.screen.detachEvent("onmouseover", self.onMouseOver);
				self.screen.detachEvent("onmouseout", self.onMouseOut);
				self.screen.detachEvent("onmouseup", self.onClick);
			}
			
			FWDS3DCovModTweenMax.killTweensOf(self.n_do);
			
			self.n_do.destroy();
			self.s_do.destroy();
			
			self.nImgUrl = null;
			self.sImgUrl = null;
			
			self.n_do = null;
			self.s_do = null;
			
			self.setInnerHTML("");
			prototype.destroy();
			self = null;
			prototype = null;
			FWDS3DCovPresetButton.prototype = null;
		};
	
		this.init();
	};
	
	/* set prototype */
	FWDS3DCovPresetButton.setPrototype = function(){
		FWDS3DCovPresetButton.prototype = new FWDRLS3DDisplayObject("div");
	};
	
	FWDS3DCovPresetButton.CLICK = "onClick";
	
	FWDS3DCovPresetButton.prototype = null;
	window.FWDS3DCovPresetButton = FWDS3DCovPresetButton;
}(window));