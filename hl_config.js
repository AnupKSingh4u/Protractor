var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		//directConnect: true,
 seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DataDriven.js'],

//capabilities: {
//	  browserName: 'firefox',
//
//	  'moz:firefoxOptions': {
//	     args: [ "--headless" ]
//	   }
//	},

	 multiCapabilities: [
		 
		 {'browserName': 'firefox',
			 'moz:firefoxOptions': {'args': [ "--headless" ]},
		// 	 proxy: {
		// 		proxyType: 'manual',
		// 	//	httpProxy: 'localhost:8443',
		// 		sslProxy: 'http://localhost:4444/wd/hub'
		//  },
	 
		 },
		  
		  
		  {
		    'browserName': 'chrome',
		    	 'chromeOptions': {
		    	     'args': [ '--headless', '--disable-gpu', '--window-size=800,600']
		    	   }
		 
		  }

],
  
		
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },
   
   
   
   
   suites: {
	   Smoke:['FirstScript.js','DataDriven.js'],
	   Regression:['DataDriven.js']   
   },
   
   
	
  jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	  }
  
   
};