/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */



// Replace the lat/long below with the lat/long for your desired location. Get your city lat/long using https://www.latlong.net/
var latlong = '38.046360,-84.497017';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '9c200e867556081d48f46545f9eba2ad';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)



// Display the weather content once it is loaded, not before.
.done(function(forecast) {

	$('header button').click(function(){
	  $('header').addClass('slide');
	});

	// The following line calls a function to display the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})



// Print the data object feturned from DarkSky for all the details. DO NOT EDIT THIS LINE.
.always(function(forecast) {
	console.log(forecast);
});



/* -----------------------------------------------
   Function for displaying the main weather info
   ----------------------------------------------- */


// All of the data comes from the "forecast" object returned from the DarkSky API.
// Inspect this page in the browser for a full list of data that can be used using the methods below.


function displayData(forecast){

	//	TODAY'S WEATHER

	$('.weather .current .icon').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');

	$('.weather .detail h1').html(forecast.daily.data[0].temperatureHigh);
	$('.weather .detail h1').html(Math.round(forecast.daily.data[0].temperatureHigh));

	// $('.weather .detail p1').html(forecast.daily.data[0].summary);

	$('.weather .detail .high').html(forecast.daily.data[0].temperatureHigh);
	$('.weather .detail .high').html(Math.round(forecast.daily.data[0].temperatureHigh));

	$('.weather .detail .low').html(forecast.daily.data[0].temperatureLow);
	$('.weather .detail .low').html(Math.round(forecast.daily.data[0].temperatureLow));

	$('.weather .detail .humidity').html(forecast.daily.data[0].humidity);
	$('.weather .detail .humidity').html(Math.round(forecast.daily.data[0].humidity));

	$('.weather .detail .winds').html(forecast.daily.data[0].windSpeed);
	$('.weather .detail .winds').html(Math.round(forecast.daily.data[0].windSpeed));

	$('.weather .detail .precip').html(forecast.daily.data[0].precipProbability);
	$('.weather .detail .precip').html(Math.round(forecast.daily.data[0].precipProbability));



	//	WEEKLY FORECAST

	$('.weather .week .box0 .icon').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');
	$('.weather .week .box1 .icon').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	$('.weather .week .box2 .icon').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');
	$('.weather .week .box3 .icon').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');
	$('.weather .week .box4 .icon').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');
	$('.weather .week .box5 .icon').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');
	$('.weather .week .box6 .icon').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	$('.weather .week .box0 h1').html(forecast.daily.data[0].temperatureHigh);
	$('.weather .week .box0 h1').html(Math.round(forecast.daily.data[0].temperatureHigh));

	$('.weather .week .box0 h2').html(forecast.daily.data[0].temperatureLow);
	$('.weather .week .box0 h2').html(Math.round(forecast.daily.data[0].temperatureLow));

	$('.weather .week .box0 .humidity').html(forecast.daily.data[0].humidity);
	$('.weather .week .box0 .humidity').html(Math.round(forecast.daily.data[0].humidity));

	$('.weather .week .box0 .winds').html(forecast.daily.data[0].windSpeed);
	$('.weather .week .box0 .winds').html(Math.round(forecast.daily.data[0].windSpeed));

	$('.weather .week .box0 .precip').html(forecast.daily.data[0].precipProbability);
	$('.weather .week .box0 .precip').html(Math.round(forecast.daily.data[0].precipProbability));



}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "SUN";
	weekday[1] = "MON";
	weekday[2] = "TUE";
	weekday[3] = "WED";
	weekday[4] = "THU";
	weekday[5] = "FRI";
	weekday[6] = "SAT";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  return time;
}


/* -----------------------------------------------
   Function for adding icon files
   ----------------------------------------------- */

function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return "img/icons/Sun.svg";
    		break;
    	case "clear-night":
    		return "img/icons/Moon-Full.svg";
    		break;
    	case "rain":
    		return "img/icons/Cloud-Rain.svg";
    		break;
    	case "snow":
    		return "img/icons/Snowflake.svg";
    		break;
    	case "sleet":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "wind":
    		return "img/icons/Wind.svg";
    		break;
    	case "fog":
    		return "img/icons/Cloud-Fog.svg";
    		break;
    	case "cloudy":
    		return "img/icons/Cloud.svg";
    		break;
    	case "partly-cloudy-day":
    		return "img/icons/Cloud-Sun.svg";
    		break;
    	case "partly-cloudy-night":
    		return "img/icons/Cloud-Moon.svg";
    		break;
    	case "hail":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "thunderstorm":
    		return "img/icons/Cloud-Lightening.svg";
    		break;
    	case "tornado":
    		return "img/icons/Tornado.svg";
    		break;
  		default:
    		// code block
	}
}






// if ( Math.round(forecast.daily.data[0].temperatureHigh) >= 40 && Math.round(forecast.daily.data[0].temperatureHigh) < 50 ){
//     It looks like rain.
// }


$('.box p').hide();

$('.box').click(function(){
  $('.box p').addClass('hide');
  // $('.box p').hide();
  $(this).find('p').removeClass('hide');
  // $(this).find('p').toggle();
})


// ----------------------------------------------
// ALL COMMENTS FROM EARLIER IN THE CODE
// USED FOR REFERENCE & ORGANIZATION
// ----------------------------------------------

// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	// The most basic basic approach is to just hide the header (uncomment to use)
		// $('header').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)
		// $('header').addClass('anim');
	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)
	// $('header').append('<a class="button" href="#">Click</a>');
	// $('header .button').click(function(){
	//   $('header').hide();
	// });



	// Target an element in your interface and display dynamic weather information inside of it.

	// All of the data you need is located in the "Console" tab when you inspect th code in the browser.
	// Click the arrow next to the "Object" to drill down into the data.
	// You can reference these data points in your code using the following method(s).

	// For example, if I have an element <div class="today"> in my main content area
	// I can add data from the "Daily" array like this.



	// If I want to display the same information for tomorrow, change the 0 to 1
		// $('.today').html(Math.round(forecast.daily.data[1].temperatureHigh));

	// If I want to display a summary of the weather
	// (like, "scattered thundershowers...") for today
		// $('.today').html(forecast.daily.data[0].summary);

		// If I want to modify the display of the page element based on the weather
	// I can access the "icon" property. This returns a value that can be used
	// as a CSS class name that you can create with your style details
		// $('.today').addClass(forecast.daily.data[0].icon);

	// Note – the value of "icon" above needs to be checked in the inspect
	// panel. It may say "rain". If this is the case, you could create a rule
	// inside your CSS called .rain and then add, maybe, a background color
	// or image. The full range of weather values returned by the "icon" property are
		// "clear-day", "clear-night", "rain", "snow", "sleet", "wind", "fog",
		// "cloudy", "partly-cloudy-day", "partly-cloudy-night", "hail",
		// "thunderstorm" and "tornado"