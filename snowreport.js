$(document).ready(function){
	$.ajax({
		url: 'http://www.myweather2.com/developer/weather.ashx?uac=A8mBjk6yZz&uref=2fabf852-b7c9-4311-aa61-8a00e28f92c0&output=json',
		type: 'GET',
		data: {
			format: 'json'
		},
		var dataLoaded = function(data, textStatus){
			for(i=0; i<data.forecast.length; i++){
				var date = data.forecast[i].date;
				var weatherCast = {weath: forecast.weather_text, wd: forecast.wind.}

			}
		};

});
