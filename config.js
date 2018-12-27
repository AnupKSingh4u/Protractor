var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect: true,
// seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DataDriven.js'],
  
  
//  Capabilities: 
//	  {
//	    browserName: 'firefox',
//	    firefoxOptions: {
//	      args: ['--headless']
//	    },
//	   
  
  
  capabilities: {
	 'browserName': 'chrome',
	  //'browserName': 'internet explorer',
	 //'browserName': 'firefox',
	 
	    chromeOptions: {
	       // binary: '/Users/guymograbi/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
	        args: ['--headless','--disable-gpu','--window-size=800,600--']
	      }
  },

  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
        	fileName: 'MyReportName',        	
        	//cleanDestination: true,        	
          savePath: './target/Reports',
          fixedScreenshotName: true
        	  
        })
      );
      
   },
   
   suites:
   {
	   Smoke:['FirstScript.js','DataDriven.js'],
	   Regression:['DataDriven.js']
   
   },
	
  jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	    
	  }
 
   
  
};