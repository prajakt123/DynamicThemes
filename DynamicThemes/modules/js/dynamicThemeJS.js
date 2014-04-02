
/*****************************************************************
*	Name    : dynamicThemes
*	Author  : Kony Solutions
*	Purpose : Below function is setting data into segment using setData api  .
******************************************************************/

	function dynamicThemes(){
		var segData = [];		
		segData.push({lbl1:"Whole grain bread",lbl2:"Bread",lbl31:"Price:",lbl32:"24",lbl41:"Rate:",lbl42:"4.5"},
					{lbl1:"Low fat milk",lbl2:"Milk",lbl31:"Price:",lbl32:"45",lbl41:"Rate:",lbl42:"6.5"},
					{lbl1:"Americana Variety - Mix of 6 flavors",lbl2:"Vint soda",lbl31:"Price:",lbl32:"53",lbl41:"Rate:",lbl42:"7.5"},
					{lbl1:"16-Ounce Plastic Bottles (Pack of 12)",lbl2:"Cranberry Juice",lbl31:"Price:",lbl32:"65",lbl41:"Rate:",lbl42:"3.2"},
					{lbl1:"36 Ounce Cans (Pack of 3)",lbl2:"Lemonade",lbl31:"Price:",lbl32:"64",lbl41:"Rate:",lbl42:"1.4"},
					{lbl1:"1080P Upconversion DVD Player",lbl2:"DVD Player",lbl31:"Price:",lbl32:"25",lbl41:"Rate:",lbl42:"6.5"},
					{lbl1:"42 inch 1080p LCD with Built-in Blu-ray Disc Player",lbl2:"LCD HDTV",lbl31:"Price:",lbl32:"78",lbl41:"Rate:",lbl42:"7.6"},
					{lbl1:"Folgers Medium Classic Roast Ground Coffee",lbl2:"Grocery",lbl31:"Price:",lbl32:"54",lbl41:"Rate:",lbl42:"7.8"},
					{lbl1:"Metropolitan 5 Piece Dining Set, Black ",lbl2:"",lbl31:"Price:",lbl32:"23",lbl41:"Rate:",lbl42:"3.4"},
					{lbl1:"Great Value Classic Roast Medium Ground Coffee",lbl2:"Grocery",lbl31:"Price:",lbl32:"46",lbl41:"Rate:",lbl42:"2.4"},
					{lbl1:"Shaker 5 Piece Dining Set, Espresso ",lbl2:"Home",lbl31:"Price:",lbl32:"35",lbl41:"Rate:",lbl42:"5.7"},
					{lbl1:"Zella 3 Piece Pub Set, Espresso ",lbl2:"Home",lbl31:"Price:",lbl32:"28",lbl41:"Rate:",lbl42:"2.3"}				
		);
		frmdynamicTheme.segment2120664956617990.setData(segData);
		frmdynamicTheme.show();
		
	}

/*****************************************************************
*	Name    : createThemefn
*	Author  : Kony Solutions
*	Purpose : Below API(setCurrentTheme) is setting the locally packaged theme(default.theme)  .
******************************************************************/

	 function createThemefn(){
	 	kony.application.showLoadingScreen("frm","loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true,null);
	 	kony.theme.setCurrentTheme("default", onsuccesscallback, onerrorcallback);
	 	kony.application.dismissLoadingScreen();
	 }
	 
/*****************************************************************
*	Name    : newKonyThemefn
*	Author  : Kony Solutions
*	Purpose : Below API(setCurrentTheme) is setting the locally packaged theme(NewKonyTheme.theme)  .
******************************************************************/
 
	 function newKonyThemefn(){
	 	
	 	kony.theme.setCurrentTheme("NewKonyTheme", onsuccesscallback, onerrorcallback);
	 	frmdynamicTheme.show();
	 	
	 }
	
/*****************************************************************
*	Name    : oldkonyThemefn
*	Author  : Kony Solutions
*	Purpose : Below API(setCurrentTheme) is setting the locally packaged theme(OldKonyTheme.theme)  .
******************************************************************/ 
	 
	  function oldkonyThemefn(){
	  	//kony.print("Before calling setcurrenttheme");
	 	kony.theme.setCurrentTheme("OldKonyTheme", onsuccesscallback, onerrorcallback);
	 	//kony.print("After calling setcurrenttheme");
	 	frmdynamicTheme.show();
	 	//kony.print("After frmdynamicTheme show");
	 	
	 }
	 
/*****************************************************************
*	Name    : defaultThemefn
*	Author  : Kony Solutions
*	Purpose : Below API(setCurrentTheme) is setting the remote theme(remote.theme) i.e. available on remote server .
******************************************************************/
	 
	 function defaultThemefn(){
	 	 	
	 	if(kony.theme.isThemePresent("myTheme")){	 		
	 		kony.theme.setCurrentTheme("myTheme", onsuccesscallback, onerrorcallback);
	 		frmdynamicTheme.show();
	 		}
	 	else{
	 		
	 		var url = "http://sampleapps.konylabs.net/themes/remote.theme"; 		 		
	 		kony.theme.createTheme(url,"myTheme" ,onsuccesscallback, onerrorcallback);
	 		kony.theme.setCurrentTheme("myTheme", onsuccesscallback, onerrorcallback);
	 		frmdynamicTheme.show();
	 		
	 	}	 		
	 }
	 
/*****************************************************************
*	Name    : onsuccesscallback
*	Author  : Kony Solutions
*	Purpose : Below function will triggered on success of setCurrentTheme and createTheme APIs .
******************************************************************/

	 function onsuccesscallback(){
		 kony.print("Theme suceessfully changed");
	 }
	 
/*****************************************************************
*	Name    : onerrorcallback
*	Author  : Kony Solutions
*	Purpose : Below function will triggered on failure of  setCurrentTheme and createTheme APIs .
******************************************************************/
	 function onerrorcallback(){
		 kony.print("Theme change failure");
	 }