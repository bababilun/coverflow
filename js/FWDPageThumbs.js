/* FWDS3DCovPageThumbs */
(function (window){
var FWDS3DCovPageThumbs = function(props_obj){
		
		var self = this;
		var prototype = FWDS3DCovPageThumbs.prototype;
		
		this.parent = props_obj.parent;
		this.image_img;
		
		this.labels_ar = props_obj.labels;
		this.imagesPath_ar = props_obj.imagesPath;
		this.thumbs_ar = [];
		
		this.thumbnailBorderColor_str =  props_obj.thumbnailBorderColor;"#FFFFFF";
		this.textNormalColor_str =  props_obj.textNormalColor; "#666666";
		this.textSelectedColor_str =  props_obj.textSelectedColor; "#0099ff";
		this.wiewSampleTextColor_str =  props_obj.wiewSampleTextColor; "#FFFFFF";
			
		this.maxWidth = props_obj.maxWidth;
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.totalHeight = 0;
		this.thumbnailMaxWidth = 180;
		this.thumbnailMaxHeight = 120;
		this.spacerH = 50;
		this.spacerV = 15;
		this.iconOffsetHeight = 40;
		this.totalThumbs = this.labels_ar.length;
		this.thumbnailBorderSize = 4;
		this.countLoadedThumbs = 0;
		this.totalRows;
		this.remainSpace;
		this.thumbW;
		this.thumbH;
		this.stageWidth;
		this.howManyThumbsToDisplayH;
		this.howManyThumbsToDisplayV;
		this.toAddToX;
		this.curId = 0;
		this.shadowOffsetX = props_obj.shadowOffsetX;
		this.shadowOffsetY = props_obj.shadowOffsetY;
		this.shadowOffsetW = props_obj.shadowOffsetW;
		this.shadowOffsetH = props_obj.shadowOffsetH;
		
		this.loadWithDelayId_to;
	
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.setOverflow("visible");
			self.setupThumbs();
			self.enableOrDisableThumbs(0);
			self.parent.appendChild(self.screen);
			
			setTimeout(self.positionAndResize, 50);
		};
		
		//###########################################//
		/* resize and position */
		//##########################################//
		this.positionAndResize = function(viewportWidth){	
			if (!viewportWidth) return;
			if(self.viewportWidth == viewportWidth) return;
			
			self.viewportWidth = viewportWidth;
			
			self.stageWidth = viewportWidth > self.maxWidth ? self.maxWidth : viewportWidth;
		
			self.positionAndResizeThumbs();
			self.setX(parseInt((self.viewportWidth - self.stageWidth)/2));
		};
		
		//#############################################//
		/* setup thumbnails */
		//#############################################//
		this.setupThumbs = function()
		{
			var thumb;
			
			for(var i=0; i<self.totalThumbs; i++)
			{
				FWDS3DCovPageThumb.setPrototype();
				
				thumb = new FWDS3DCovPageThumb(i, 180, 120, self.imagesPath_ar[i] + "N.jpg", self.imagesPath_ar[i] + "S.jpg");
				thumb.addListener(FWDS3DCovPageThumb.CLICK, self.onThumbClick);
				
				self.thumbs_ar[i] = thumb;
				self.addChild(thumb);
			}
		};
		
		this.onThumbClick = function(e)
		{
			self.curId = e.id;
			self.enableOrDisableThumbs();
			
			self.dispatchEvent(FWDS3DCovPageThumb.CLICK, {id:self.curId});
		};
		
		//#############################################//
		/* load images */
		//#############################################//
		this.loadImages = function(){
			if(self.countLoadedThumbs > self.totalThumbs-1) return;
			
			if(self.image_img){
				self.image_img.onload = null;
				self.image_img.onerror = null;
			}
			
			self.image_img = new Image();
			self.image_img.onload = self.onImageLoadComplete;
			self.image_img.src = self.imagesPath_ar[self.countLoadedThumbs];
		};
		
		this.onImageLoadComplete = function(e){
			var thumb = self.thumbs_ar[self.countLoadedThumbs];
			
			thumb.setImage(self.image_img);
			
			self.countLoadedThumbs++;
			self.loadWithDelayId_to = setTimeout(self.loadImages, 40);	
		};
		
		//#############################################//
		/* resize thumbnails and containers */
		//#############################################//
		this.positionAndResizeThumbs = function(animate){
			
			var thumb;
			var newX;
			var newY;
			var newSpace = self.spacerH;
			var totalThumbsWidth;
			
			if (self.thumbnailMaxWidth * 2 + self.spacerH > self.stageWidth)
			{
				newSpace = self.stageWidth - self.thumbnailMaxWidth * 2;
			}
			
			totalThumbsWidth = self.thumbnailMaxWidth * 2 + newSpace;
			
			self.thumbs_ar[0].setX((self.stageWidth - totalThumbsWidth)/2);
			self.thumbs_ar[0].setY(self.spacerV);
			
			self.thumbs_ar[1].setX((self.stageWidth - totalThumbsWidth)/2 + self.thumbnailMaxWidth + newSpace);
			self.thumbs_ar[1].setY(self.spacerV);
			
			self.totalHeight = self.thumbnailMaxHeight + self.spacerV * 2;
			
			self.parent.style.height = self.totalHeight + "px";
		};
		
		//#############################################//
		/* Disable / enable */
		//#############################################//
		this.enableOrDisableThumbs = function(){
			for(var i=0; i<self.totalThumbs; i++){
				thumb = self.thumbs_ar[i];
				if(self.curId == i){
					thumb.disable();
				}else{
					thumb.enable();
				}
			}
		};
		
	
		self.init();
	};
	
	/* set prototype */
	FWDS3DCovPageThumbs.setPrototype = function(){
		FWDS3DCovPageThumbs.prototype = new FWDRLS3DDisplayObject("div");
	};
	
	FWDS3DCovPageThumbs.CLICK = "onClick";

	FWDS3DCovPageThumbs.prototype = null;
	window.FWDS3DCovPageThumbs = FWDS3DCovPageThumbs;
}(window));