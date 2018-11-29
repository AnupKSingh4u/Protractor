

describe('protractor baby steps',function(){
	var cal=require("./Locators.js")
	var d= require("./data.js")
	var using = require('jasmine-data-provider');
	
	it('launching application',function(){
		cal.launchApp(cal.url);
		var EC = protractor.ExpectedConditions;
		// Waits for the element with id 'abc' to be visible on the dom.
		browser.wait(EC.visibilityOf(cal.firstvalue), 15000);
		cal.winmax;
		
	});
		
    using(d.DataSet, function (value, description) {
    	
    		
it('Calculator: '+description,function(){
	console.log(description);
	//browser.get('https://angularjs.org');
	//browser.get(cal.url);
	
	//element(by.css("select[model='first']")).sendKeys(400);
	//Using first value for first input
	cal.firstvalue.sendKeys(value.inp1);
	
	//Using second value for first input
	cal.secondvalue.sendKeys(value.inp2);
	
	element(by.id("gobutton")).click();
	
	
	//protractor and jasmin takes care of promise resolve. We have to take care only for java script codes.
	//Only in case of retrieving value from page protractor do not resolves promise.
	
	//to.Be is for comparing one value with another value.
	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(value.result);
	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(value.result);
	//to.Match will give true if any of the character/number from retrieved value is matching.
	//expect(element(by.css("h2[class='ng-binding']")).getText()).toMatch("3");
	element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
		
		console.log('.....Retrieving result......');
		console.log("Add sum of two values is: "+text);
		//console.log('Execution completed successfully');
		
	})
		
	
	
	})	
//	afterEach(function(){
//		console.log("Test Completed Successfully.")
//		
//	});
	
})
})