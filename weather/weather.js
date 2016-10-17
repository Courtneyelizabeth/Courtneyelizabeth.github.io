var aspen = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.openweathermap.org/data/2.5/group?id=5582371,5412230&units=metric&appid=2cf669fd8a60ec333738f29801599eee",
  "method": "GET"
}

$.ajax(aspen).done(function (data) {
  console.log(data);
	var city = data["list"][1]["name"];
  var description = data["list"][1]["weather"][0]["description"];
	var humidity = data["list"][1]["main"]["humidity"];
  var temp1 = data["list"][1]["main"]["temp"];
  console.log(temp1);
  var number = ((temp1 * 1.8) +32);
  var temp = Math.round(number);
	var windKph = data["list"][1]["wind"]["speed"];
	/*console.log(windKph);*/
	var windMph = (windKph /1.60934);
	var windMph = Math.round(windMph);
	console.log(city);
  console.log(temp);
  console.log(description);
	console.log(humidity);
	console.log(windMph);
  $("#description").html(description);
  $("#city").append(city);
  $("#temp").prepend(temp);
	$("#humidity").prepend(humidity);
	$("#windMph").prepend(windMph);
});

var steamboat = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/group?id=5582371,5412230&units=metric&appid=2cf669fd8a60ec333738f29801599eee",
  "method": "GET"
}
$.ajax(steamboat).done(function (data) {
  console.log(data);
	var city = data["list"][0]["name"];
  var description = data["list"][0]["weather"][0]["description"];
	var humidity2= data["list"][0]["main"]["humidity"];
	var degree1 = data["list"][0]["main"]["temp"];
	console.log(degree1);
	var windSpeedKph = data["list"][0]["wind"]["speed"];
	/*console.log(windSpeedKph);*/
	var windSpeedMph = (windSpeedKph / 1.60934);
	var windSpeedMph = Math.round(windSpeedMph);
	var degree= ((degree1 * 1.8) +32);
  var degree = Math.round(degree);
	console.log(city);
	console.log(degree);
  console.log(description);
	console.log(humidity2);
	console.log(windSpeedMph);
  $("#description2").html(description);
  $("#city2").append(city);
	$("#degree").prepend(degree);
	$("#humidity2").prepend(humidity2);
	$("#windSpeedMph").prepend(windSpeedMph);
});
