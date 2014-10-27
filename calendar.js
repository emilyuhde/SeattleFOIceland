(function() {
  var app = angular.module('calendar', []);

  app.controller('CalendarController', function(){
   this.events = events; 
  });

  var events = [
	{ 
		title: 'Casual Meet and Greet (and beer!)', 
		date: 'Sunday, October 19th @ 6pm',
		location: 'Asgard Tavern / Odin Brewing Company Tasting Room',
		address1: '1300 N. Northlake Way',
		address2: 'Seattle, WA 98103',
		description: 'Join Margr&#xE9;t, Justin and Adam for beer, casual conversation and to chat with other people in your special interest groups.',
		upcoming: false
	},
	{ 
		title: 'Fall Icelandic Classes Begin', 
		date: 'Monday, October 6th',
		location: '<a href="http://www.nordicmuseum.org/">Nordic Heritage Museum</a>',
		address1: '3014 NW 67th St', 
		address2: 'Seattle, WA 98117',
		description: '<a href="http://www.sliseattle.com/home/classes/winter-2010">See SLI\'s website for more details<br/><br/>',
		upcoming: false
	},
    { 
		title: 'Our First Meeting!', 
		date: 'Sunday, October 12th @ 7 pm',
		location: '826 Seattle / Greenwood Space Travel Supply Co.',
		address1: '8414 Greenwood Ave N',
		address2: 'Seattle, WA 98103',
		description: 'Meet and greet followed by watching an Icelandic movie, Dj&#xFA;pi&eth;.',
		upcoming: false
	},
    { 
		title: 'Taste Of Iceland - Seattle', 
		date: 'October 9-12',
		location: 'We are attending the Taste of Iceland dinner at Dahlia Lounge on October 11th',
		address1: 'and the Reykjav&#xED;k Calling concert at Neumos on October 11th.',
		address2: '',
		description: ' <a href="http://www.icelandnaturally.com/events/taste-of-iceland-in-seattle-2014">See the Taste of Iceland website for the full schedule and locations.</a>',
		upcoming: false
	},
    { 
		title: 'Our first (planning) meeting ever!', 
		date: 'Sunday, September 7th @ 5 pm',
		location: '<a href="http://icelandicstudy.com/">Margr&#xE9;t</a>\'s House',
		address1: '',
		address2: '',
		description: '',
		upcoming: false
	},
  ];
})();
