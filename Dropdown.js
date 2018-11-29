
describe('protractor:-dropdown handling',function(){
	
	
	function calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		
		// Dropdown handling ............................
		element(by.model("operator")).click();
		element.all(by.tagName("option")).each(function(item){
			
			item.getAttribute("value").then(function(text){
				
			
				//console.log(text);
				
				if(text==c){
					
					item.click();
					
					
				}
				
			})
		})

		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click().then(function(){
			console.log("test git branching")
			console.log("Attention! you are in Develop branch")
		})
		
	}	
	
	
	
	
it('opent non angular web application',function(){

	browser.get('https://juliemr.github.io/protractor-demo/');
	browser.manage().window().maximize();

	calc(6,9,"ADDITION");
	calc(10,10,"SUBTRACTION");
	calc(15,3,"DIVISION")
	
	
	element.all(by.repeater("result in memory")).each(function(item)
{
item.element(by.css("td:nth-child(2)")).getText().then(function(text)
		{

		console.log(text);
		})


item.element(by.css("td:nth-child(3)")).getText().then(function(text)
{

console.log(text);
})

})
	
	})

})

