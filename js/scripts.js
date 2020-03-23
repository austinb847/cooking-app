var gallonsToLiters = function(numGallons) {
	var litersInGallon = 3.785411784;
  var totalLiters = numGallons * litersInGallon;
  return totalLiters + " liters";
}

var getGallons = parseInt(prompt("How many gallons do you want to convert to liters?"));

alert(gallonsToLiters(getGallons));