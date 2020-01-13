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

	$('.head .info').click(function(){
	  $('.weather').addClass('slide');
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

	//	CURRENT WEATHER

	$('.current .icon').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');

	$('.sum').html(forecast.daily.data[0].summary);

	$('.current .high p').html(forecast.daily.data[0].temperatureHigh);
	$('.current .high p').html(Math.round(forecast.daily.data[0].temperatureHigh));

	$('.current .low p').html(forecast.daily.data[0].temperatureLow);
	$('.current .low p').html(Math.round(forecast.daily.data[0].temperatureLow));

	$('.current .hum').html(forecast.daily.data[0].humidity);
	// $('.weather .detail .humidity').html(Math.round(forecast.daily.data[0].humidity));

	$('.current .wind').html(forecast.daily.data[0].windSpeed);
	$('.current .wind').html(Math.round(forecast.daily.data[0].windSpeed));

	$('.current .precip').html(forecast.daily.data[0].precipProbability);
	$('.current .precip').html(Math.round(forecast.daily.data[0].precipProbability));

	$('.warning p').html(warning(forecast.daily.data[0].temperatureHigh));



	//	WEEKLY FORECAST

	$('.box0 .icon').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');
	$('.box1 .icon').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	$('.box2 .icon').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');
	$('.box3 .icon').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');
	$('.box4 .icon').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');
	$('.box5 .icon').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');
	$('.box6 .icon').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	$('.box0 h1').html(forecast.daily.data[0].temperatureHigh);
	$('.box0 h1').html(Math.round(forecast.daily.data[0].temperatureHigh));
	$('.box1 h1').html(forecast.daily.data[1].temperatureHigh);
	$('.box1 h1').html(Math.round(forecast.daily.data[1].temperatureHigh));
	$('.box2 h1').html(forecast.daily.data[2].temperatureHigh);
	$('.box2 h1').html(Math.round(forecast.daily.data[2].temperatureHigh));
	$('.box3 h1').html(forecast.daily.data[3].temperatureHigh);
	$('.box3 h1').html(Math.round(forecast.daily.data[3].temperatureHigh));
	$('.box4 h1').html(forecast.daily.data[4].temperatureHigh);
	$('.box4 h1').html(Math.round(forecast.daily.data[4].temperatureHigh));
	$('.box5 h1').html(forecast.daily.data[5].temperatureHigh);
	$('.box5 h1').html(Math.round(forecast.daily.data[5].temperatureHigh));
	$('.box6 h1').html(forecast.daily.data[6].temperatureHigh);
	$('.box6 h1').html(Math.round(forecast.daily.data[6].temperatureHigh));

	$('.box0 h2').html(forecast.daily.data[0].temperatureLow);
	$('.box0 h2').html(Math.round(forecast.daily.data[0].temperatureLow));

	$('.box0 h2').html(forecast.daily.data[0].temperatureLow);
	$('.box0 h2').html(Math.round(forecast.daily.data[0].temperatureLow));
	$('.box1 h2').html(forecast.daily.data[1].temperatureLow);
	$('.box1 h2').html(Math.round(forecast.daily.data[1].temperatureLow));
	$('.box2 h2').html(forecast.daily.data[2].temperatureLow);
	$('.box2 h2').html(Math.round(forecast.daily.data[2].temperatureLow));
	$('.box3 h2').html(forecast.daily.data[3].temperatureLow);
	$('.box3 h2').html(Math.round(forecast.daily.data[3].temperatureLow));
	$('.box4 h2').html(forecast.daily.data[4].temperatureLow);
	$('.box4 h2').html(Math.round(forecast.daily.data[4].temperatureLow));
	$('.box5 h2').html(forecast.daily.data[5].temperatureLow);
	$('.box5 h2').html(Math.round(forecast.daily.data[5].temperatureLow));
	$('.box6 h2').html(forecast.daily.data[6].temperatureLow);
	$('.box6 h2').html(Math.round(forecast.daily.data[6].temperatureLow));

	$('.box0 .humidity p').html(forecast.daily.data[0].humidity);
	$('.box1 .humidity p').html(forecast.daily.data[1].humidity);
	$('.box2 .humidity p').html(forecast.daily.data[2].humidity);
	$('.box3 .humidity p').html(forecast.daily.data[3].humidity);
	$('.box4 .humidity p').html(forecast.daily.data[4].humidity);
	$('.box5 .humidity p').html(forecast.daily.data[5].humidity);
	$('.box6 .humidity p').html(forecast.daily.data[6].humidity);

	$('.box0 .wind p').html(forecast.daily.data[0].windSpeed);
	$('.box0 .wind p').html(Math.round(forecast.daily.data[0].windSpeed));
	$('.box1 .wind p').html(forecast.daily.data[1].windSpeed);
	$('.box1 .wind p').html(Math.round(forecast.daily.data[1].windSpeed));
	$('.box2 .wind p').html(forecast.daily.data[2].windSpeed);
	$('.box2 .wind p').html(Math.round(forecast.daily.data[2].windSpeed));
	$('.box3 .wind p').html(forecast.daily.data[3].windSpeed);
	$('.box3 .wind p').html(Math.round(forecast.daily.data[3].windSpeed));
	$('.box4 .wind p').html(forecast.daily.data[4].windSpeed);
	$('.box4 .wind p').html(Math.round(forecast.daily.data[4].windSpeed));
	$('.box5 .wind p').html(forecast.daily.data[5].windSpeed);
	$('.box5 .wind p').html(Math.round(forecast.daily.data[5].windSpeed));
	$('.box6 .wind p').html(forecast.daily.data[6].windSpeed);
	$('.box6 .wind p').html(Math.round(forecast.daily.data[6].windSpeed));

	$('.box0 .precip p').html(forecast.daily.data[0].precipProbability);
	$('.box1 .precip p').html(forecast.daily.data[1].precipProbability);
	$('.box2 .precip p').html(forecast.daily.data[2].precipProbability);
	$('.box3 .precip p').html(forecast.daily.data[3].precipProbability);
	$('.box4 .precip p').html(forecast.daily.data[4].precipProbability);
	$('.box5 .precip p').html(forecast.daily.data[5].precipProbability);
	$('.box6 .precip p').html(forecast.daily.data[6].precipProbability);
	// $('.box6 .precip').html(Math.round(forecast.daily.data[6].precipProbability));
}


// WARNING

function warning(n){
	if ( n >= 75 && n < 90 ){
	    return 'Go easy in lessons and exercises today. Cool down any horses after work with a walk and bath if needed.';
	}

	if ( n >= 35 && n < 55 ){
	    return 'Make sure to blanket horses that are clipped, have thinner coats, or are naturally thin in build.';
	}

	if ( n >= 32 && n < 0 ){
	    return 'Take caution bringing horses out today.';
	}

	if ( n >= 32 && n < 0 ){
	    return 'Check all outdoor water buckets frequently to ensure they aren’t frozen over.';
	}
}



// HIDE WEEK DETAILS

$('.humidity, .wind, .precip').hide();
$('.box').click(function(){
  // $('.box p').addClass('hide');
  $('.humidity, .wind, .precip').hide();
  // $(this).find('p').removeClass('hide');
  $(this).find('.humidity, .wind, .precip').toggle();
})




/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

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