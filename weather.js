var aspen = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/weather?zip=81611%2Cus&appid=44db6a862fba0b067b1930da0d769e98&units=imperial",
  "method": "GET"
}

$.ajax(aspen).done(function (data) {
  console.log(data);
	var city = data.name;
  var description = data["weather"][0]["description"];
  var temp1 = data["main"]["temp"];
  console.log(temp1);
  var number = temp1;
  var temp = Math.round(number);
	var wind1 = data["wind"]["deg"];
	var num = wind1;
	var wind = Math.round(num);
  console.log(temp);
	console.log(city);
  console.log(description);
  $("#description").html(description);
  $("#city").append(city);
  $("#temp").prepend(temp);
	$("#wind").append(wind);
});

/*var aspen = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/weather?zip=81611%2Cus&appid=44db6a862fba0b067b1930da0d769e98",
  "method": "GET"
}
$.ajax(aspen).done(function (data) {
  console.log(data);
	var city = data.name;
  var description = data["weather"][0]["description"];
	var temp = data["main"]["temp"];
  console.log(temp);
  var number = parseInt(temp2);
  var temp2 = Math.round(number);
  console.log(temp2);
	console.log(city);
  console.log(description);
  $("#description2").html(description);
  $("#city2").append(city);
	$("#temp2").prepend(temp);

});*/
