function Calulator(){
	
	this.url = "https://juliemr.github.io/protractor-demo/";
	this.firstvalue =element(by.model("first"));
	this.secondvalue =element(by.model("second"));
	this.gobtn=element(by.id("gobutton"));
	this.winmax=browser.manage().window().maximize();
	this.value=element(by.css("h2[class='ng-binding']"));
	
	 this.launchApp=function(url){
		
		browser.get(url);
	};
	
};
	
	module.exports= new Calulator();
	
	