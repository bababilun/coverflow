/* FWDS3DCovPresetsMenu */
(function (window){
var FWDS3DCovPresetsMenu = function(parent, isAllSizes, infinite)
{
		var self = this;
		var prototype = FWDS3DCovPresetsMenu.prototype;
		
		this.parent = parent;
		this.isAllSizes = isAllSizes;
		
		this.menuButtons_ar = [];

		this.buttonsHolder_do = null;
		
		this.stageWidth;
		this.stageHeight;
		this.maxWidth = 940;
		this.buttonsHolderWidth = 200;
		this.buttonsBarOriginalHeight = 70;
		this.totalHeight = 0;
		this.buttonsBarTotalHeight = 200;
		this.totalButtons;
		this.totalHeight = 200;
		this.spacerWidth = 2;
		this.spacerHeight = 11;
		this.hSpace = 45;
		this.vSpace = 20;
		this.minMarginXSpace = 12;
		this.startY = 8;
		
		this.curId = 0;

		this.init = function()
		{
			self.parent.style.height = "10px";
			self.parent.appendChild(self.screen);
			
			if (infinite)
			{
				self.totalButtons = 4;
			}
			else if (self.isAllSizes)
			{
				self.totalButtons = 8;
			}
			else
			{
				self.totalButtons = 9;
			}
					
			self.setupPresets();
			
			self.positionSlidersId = setTimeout(self.positionSliderButtons, 50);
		};
			
		this.positionAndResize = function(viewportWidth)
		{
			if (self.viewportWidth == viewportWidth) return;
		
			self.viewportWidth = viewportWidth;
			self.stageWidth = viewportWidth;
			
			self.positionSliderButtons();
		};
		
		this.setupPresets = function()
		{	
			self.buttonsHolder_do = new FWDRLS3DDisplayObject("div");

			self.buttonsHolder_do.setWidth(self.buttonsHolderWidth);
			self.buttonsHolder_do.setHeight(self.buttonsBarOriginalHeight);
			
			self.addChild(self.buttonsHolder_do);
			
			var presetButton;
			
			for (var i=0; i<self.totalButtons; i++)
			{
				FWDS3DCovPresetButton.setPrototype();
				
				if (self.isAllSizes && (i == 7))
				{
					presetButton = new FWDS3DCovPresetButton(i, 149, 72, "graphics/p9n.jpg", "graphics/p9s.jpg");
				}
				else
				{
					presetButton = new FWDS3DCovPresetButton(i, 149, 72, "graphics/p" + (i+1) + "n.jpg", "graphics/p" + (i+1) + "s.jpg");
				}
				
				presetButton.addListener(FWDS3DCovPresetButton.CLICK, self.onPresetClick);

				self.menuButtons_ar[i] = presetButton;
				self.buttonsHolder_do.addChild(presetButton);
			}
			
			self.menuButtons_ar[0].disable();
		};
		
		this.onPresetClick = function(e)
		{
			self.setPreset(e.id);
			
			self.dispatchEvent(FWDS3DCovPresetsMenu.CHANGE, {id:self.curId})
		};
		
		this.setPreset = function(id)
		{
			self.curId = id;
			
			for (var i=0; i<self.totalButtons; i++)
			{
				if (i == self.curId)
				{
					self.menuButtons_ar[i].disable();
				}
				else
				{
					self.menuButtons_ar[i].enable();
				}
			}
		};
		
		//###################################################//
		/* position slider buttons */
		//###################################################//
		this.positionSliderButtons = function()
		{
			if(isNaN(self.stageWidth)) return;
			
			var button;
			var prevButton;
			var rowsAr = [];
			var rowsWidthAr = [];
			var tempX;
			var tempY = self.startY;
			var maxY = 0;
			var totalRowWidth = 0;
			var rowsNr = 0;
			var spacerCount = 0;
			
			self.buttonsHolderWidth = self.stageWidth;
			
			rowsAr[rowsNr] = [0];
			rowsWidthAr[rowsNr] = self.menuButtons_ar[0].totalWidth;
			
			for (var i=1; i<self.totalButtons; i++)
			{	
				button = self.menuButtons_ar[i];
				
				if (rowsWidthAr[rowsNr] + button.totalWidth + self.hSpace > Math.min(self.stageWidth, self.maxWidth) - self.minMarginXSpace)
				{	
					rowsNr++;
					rowsAr[rowsNr] = [];
					rowsAr[rowsNr].push(i);
					rowsWidthAr[rowsNr] = button.totalWidth;
				}
				else
				{
					rowsWidthAr[rowsNr] += button.totalWidth + self.hSpace;
					rowsAr[rowsNr].push(i);
				}
			}
			
			for (var i=0; i<rowsNr + 1; i++)
			{
				var rowMarginXSpace = parseInt((self.buttonsHolderWidth - rowsWidthAr[i])/2);
				
				if (i > 0) tempY += button.totalHeight + self.vSpace;
					
				for (var j=0; j<rowsAr[i].length; j++)
				{
					button = self.menuButtons_ar[rowsAr[i][j]];
					
					if (j == 0)
					{
						tempX = rowMarginXSpace;
					}
					else
					{
						prevButton = self.menuButtons_ar[rowsAr[i][j] - 1];
						tempX = prevButton.finalX + prevButton.totalWidth + self.hSpace;
					}
					
					button.finalX = tempX;
					button.finalY = tempY + 4;
						
					if (maxY < button.finalY)
						maxY = button.finalY;
					
					self.buttonsBarTotalHeight = maxY + button.totalHeight + self.startY + 7;
					
					button.setX(button.finalX);
					button.setY(button.finalY);
				}
			}
			
			self.totalHeight = self.buttonsBarTotalHeight;  
			self.buttonsHolder_do.setWidth(self.buttonsHolderWidth);
			self.buttonsHolder_do.setHeight(self.buttonsBarTotalHeight + 15);
			
			self.setX(parseInt((self.viewportWidth - self.stageWidth)/2));
			self.parent.style.height = (self.totalHeight + 15) + "px";
		};
		
		this.disable = function()
		{
			for(var i=0; i<self.totalButtons; i++)
			{
				self.menuButtons_ar[i].disable();
			}
		};
		
		this.enable = function()
		{
			for(var i=0; i<self.totalButtons; i++)
			{
				if (i == self.curId)
				{
					self.menuButtons_ar[i].disable();
				}
				else
				{
					self.menuButtons_ar[i].enable();
				}
			}
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDS3DCovPresetsMenu.setPrototype = function(){
		FWDS3DCovPresetsMenu.prototype = new FWDRLS3DDisplayObject("div", "absolute", "visible");
	};
	
	FWDS3DCovPresetsMenu.CHANGE = "onChange";

	FWDS3DCovPresetsMenu.prototype = null;
	window.FWDS3DCovPresetsMenu = FWDS3DCovPresetsMenu;
}(window));