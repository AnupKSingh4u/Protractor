browser.manage().timeouts().implicitlyWait(4000);
browser.ignoreSynchronization = true;


describe('protractor baby steps for non angular application',function(){
	
	function Add(a,b,A)
	{
		
	
		var A= element(by.model("operator")).element(by.css("option[value='ADDITION']"));
		var S= element(by.model("operator")).element(by.css("option[value='SUBTRACTION']"));
		var D= element(by.model("operator")).element(by.css("option[value='DIVISION']"));
		var MU= element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']"));
		
	
	element(by.model("operator")).click();
	A.click();
	element(by.model("second")).sendKeys(b);
	element(by.id("gobutton")).click();

	}
	
it('opent non angular web application',function(){
	
	
//	browser.get('https://juliemr.github.io/protractor-demo/');
//	browser.manage().window().maximize();
//	//element(by.css("select[model='first']")).sendKeys(400);
//	element(by.model("first")).sendKeys("200");
//	element(by.model("operator")).click();
//	
//	//dropdown handling ............................
//	element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();
//	element(by.model("second")).sendKeys("100");
//	element(by.id("gobutton")).click();
	
	Add(100,200,A);
	Add(10,5,MU);
	Add(200,20,S);
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().
	then(function(text) {
		
		console.log("Final Value is : "+text)
	})
	})
	})