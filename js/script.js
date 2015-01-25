$( document ).ready(function() {
    Parse.initialize("A74VDEFq9sVeu9RaOLs0C2B4QxSEnlqQLsrtesZc", "4LrgyWjfgo9ujUUVkUQpVJZo2YiqzbVRc4b7ue26");
    
    var validCountries = ["America", "Mexico", "China", "India", "Japan", "Britain", "Algeria", "Russia", "Greece", "Australlia" ];
	var validCols = ["food", "manners", "recreation", "beliefs", "appearance"];

	for(var i = 0; i < validCountries.length; i++){
		document.getElementById("countryOptions").innerHTML += validCountries[i] + ", ";
	}

	for(var i = 0; i < validCols.length; i++){
		document.getElementById("colOptions").innerHTML += validCols[i] + ", ";
	}

    var country;
	
	$("#upload").click(function(){

		

		var countryName = $("#country").val();
		var col = $("#col").val();
		var link = $("#link").val();
		var description = $("#description").val();

		var isValidCountry = false;
		var isValidCols = false;

		for(var i = 0; i < validCountries.length; i++){
			if(validCountries[i] == countryName)
				isValidCountry = true;
		}
		for(var i = 0; i < validCols.length; i++){
			if(validCols[i] == col){
				isValidCols = true;
			}
		}

		if(isValidCols && isValidCountry){
			var Extension = Parse.Object.extend(countryName);
			country = new Extension();

			country.save({foo: col}).then(function(object) {
			});
			country.save({link: link}).then(function(object) {
			});
			country.save({description: description}).then(function(object) {
			});

			isValidCountry = false;
			isValidCols = false;
		} else {
			alert("Nope. Check country and col");
			isValidCountry = false;
			isValidCols = false;
		}
	});

});