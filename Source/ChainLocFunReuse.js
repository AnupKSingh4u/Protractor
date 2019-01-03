    browser.manage().timeouts().implicitlyWait(4000);
  browser.ignoreSynchronization = true;
  var EC = protractor.ExpectedConditions;

 
  function Calculate(a,b,c)
  {		
	  
	//  var A= element(by.model("operator")).element(by.css("option[value='ADDITION']"));
	//  var S= element(by.model("operator")).element(by.css("option[value='SUBTRACTION']"));
	//  var D= element(by.model("operator")).element(by.css("option[value='DIVISION']"));
	//   var MU= element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']"));	 
  
  
	// var A= element(by.model("operator")).element(by.css("option[value*='A']"));
	// var S= element(by.model("operator")).element(by.css("option[value*='S']"));
	// var D= element(by.model("operator")).element(by.css("option[value*='D']"));
	//  var MU= element(by.model("operator")).element(by.css("option[value*='M']"));

	element(by.model("first")).sendKeys(a);
	element(by.model("operator")).click().then(function(){

	  console.log('.....Retrieving result......');

		if(c==1){
			element(by.model("operator")).element(by.css("option[value='ADDITION']")).click();
			element(by.model("second")).sendKeys(b);
			element(by.id("gobutton")).click();
			console.log("Addition of tow values...")
			var v =a+b;
			browser.wait(EC.invisibilityOf(element(by.css("h2[contains*='.']"))), 15000);
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(v.toString());
		}
		else if(c==2){
			element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();
			element(by.model("second")).sendKeys(b);
			element(by.id("gobutton")).click();
			console.log("Subtraction of tow values...")
			var v =a-b;
			browser.wait(EC.invisibilityOf(element(by.css("h2[contains*='.']"))), 15000);
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(v.toString());
		}
		else if(c==4){
			element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
			element(by.model("second")).sendKeys(b);
			element(by.id("gobutton")).click();
			console.log("Divition of tow values...")
			var v =a/b;
			browser.wait(EC.invisibilityOf(element(by.css("h2[contains*='.']"))), 15000);
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(v.toString());
		}
		else if(c==3){
			element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
			element(by.model("second")).sendKeys(b);
			element(by.id("gobutton")).click();
			console.log("Multiplication of tow values...")
			var v =a*b;
			browser.wait(EC.invisibilityOf(element(by.css("h2[contains*='.']"))), 15000);
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(v.toString());
		}
		else{
			console.log("Please select the appropriate operator")
		}
	
	})

	 
	

   //browser.wait(EC.visibilityOf(element(by.css("h2[class='ng-binding']"))), 15000);
   
   
  
  
   element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
  
	  
	  console.log("Add sum of two values is: "+text);
	  
	  //console.log('Execution completed successfully');
	  
  
})
  }

  describe('protractor baby steps for non angular application:  ',function(){		
    it('opent non angular web application',function(){		
    browser.get('https://juliemr.github.io/protractor-demo/');
	browser.manage().window().maximize();
	browser.wait(EC.visibilityOf(element(by.model("first"))), 15000);
	Calculate(10,10,1);
	Calculate(20,20,1);
	Calculate(100,10,4);
	Calculate(20,20,1);
	Calculate(10,10,3);
	// Calculate(20,20);
	// Calculate(10,10);
	// Calculate(20,20);
	// Calculate(10,10);
	// Calculate(20,20);
	// Calculate(10,10);
	// Calculate(20,20);
	
	
	//browser.sleep(5000)
	// element.all(by.repeater("result in memory")).each(function(item){
	// 	item.element(by.css("td:nth-child(3)")).getText().then(function(text) {		
	//    console.log("Final Value is : "+text)
	
	// 	})

	// })
	})
  })