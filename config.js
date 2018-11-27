var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect: true,
// seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DataDriven.js'],
  capabilities: {
	 //'browserName': 'chrome',
	  //'browserName': 'internet explorer',
	 'browserName': 'firefox',
  },

  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
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