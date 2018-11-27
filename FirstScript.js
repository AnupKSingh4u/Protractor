

describe('protractor baby steps',function(){
	var cal=require("./Locators.js")
	
	beforeEach(function(){
		cal.launchApp(cal.url);
		
		
	});
		
	
	
it('opent angular js',function(){
	
	//browser.get('https://angularjs.org');
	//browser.get(cal.url);
	
	cal.winmax;
	//element(by.css("select[model='first']")).sendKeys(400);
	cal.firstvalue.sendKeys("200");
	cal.secondvalue.sendKeys("100");
	element(by.id("gobutton")).click();
	
	
	//protractor and jasmin takes care of promise resolve. We have to take care only for java script codes.
	//Only in case of retrieving value from page protractor do not resolves promise.
	
	//to.Be is for comparing one value with another value.
	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("300");
	//to.Match will give true if any of the character/number from retrieved value is matching.
	expect(element(by.css("h2[class='ng-binding']")).getText()).toMatch("3");
	element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
		
		console.log('.....Retrieving result......');
		console.log("Add sum of two values is: "+text);
		//console.log('Execution completed successfully');
		
	})
		
	
	
	})	
	afterEach(function(){
		console.log("Test Completed Successfully.")
		
	});
	
})
