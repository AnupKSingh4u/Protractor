exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ChainLocFunReuse.js'],
  capabilities: {
	 //'browserName': 'chrome',
	  //'browserName': 'internet explorer',
	 'browserName': 'firefox',
  },
useAllAngular2AppRoots: true,
framework: 'jasmine'
  /*capabilities: {
	  'browserName': 'chrome',
	  'chromeOptions': {
	    'args': ['show-fps-counter=true']
	  }
	}*/
  
  
  
//running testcases in headless mode in chrome browser...........  
  /*capabilities: {
	  browserName: 'chrome',
	 
	  chromeOptions: {
	     args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
	   }
	}*/

  
  
  //running testcases in firefox browser.....................................

	 
	  //chromeOptions: {
	   //  args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
	  // }
	
};