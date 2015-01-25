$( document ).ready(function() {
    Parse.initialize("A74VDEFq9sVeu9RaOLs0C2B4QxSEnlqQLsrtesZc", "4LrgyWjfgo9ujUUVkUQpVJZo2YiqzbVRc4b7ue26");
    
    var country;
	
	$("#upload").click(function(){

		var validCountries = ["America", "Mexico", "China", "India", "Japan", "Britain", "France", "Russia", "Greece", "Australlia" ];
		var validCols = ["food", "manners", "recreation", "beliefs", "appearance"];

		var countryName = $("#country").val();
		var col = $("#col").val().toLowerCase();
		var linkVal = $("#link").val();
		var descriptionVal = $("#description").val();

		var isValidCountry = false;
		var isValidCols = true;

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
			country.save({link: linkVal}).then(function(object) {
			});
			country.save({description: descriptionVal}).then(function(object) {
			});
		} else {
			alert("Nope. Check country and col");
		}
	});

});