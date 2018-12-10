$(".test").on("click", function() {
  var apiKey =
    "Rf8zSlnPEcReRdTwSWq6cynhqiwJYGaH8OxPyx0J8FVDYi0SG4ZQuRoYN8xBti7_jfEelH5mejNwBrXZzFmRHCWd1QRPACTFUapoDgcwcy94AUssjoi9W3CofmwNXHYx";
  var queryURL =
    "https://api.yelp.com/v3/businesses/search/?term=restaurant&location=NYC&limit=5&api" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
