$( document ).ready(function() {
    Parse.initialize("A74VDEFq9sVeu9RaOLs0C2B4QxSEnlqQLsrtesZc", "4LrgyWjfgo9ujUUVkUQpVJZo2YiqzbVRc4b7ue26");
    
    var country;
	
	$("#upload").submit(function(event){
		event.preventDefault();
		var validCountries = ["America", "Mexico", "China", "India", "Japan", "Britain", "France", "Russia", "Greece", "Australlia" ];
		var validCols = ["food", "manners", "recreation", "beliefs", "appearance"];

		var countryName = $("#country").val();
		var col = $("#col").val().toLowerCase();
		var link = $("#link").val();
		var description = $("#description").val();

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

			country.set("description", description);
			country.set("link", link);
			country.set("foo", col);


			country.save(null, {
            wait: true,
            success: function(newRes, response) {
                alert("success");
                location.reload();
            },
            error: function(newRes, response) {
                alert("errorcode: " + response.code + "  Message: " + response.message);
                location.reload();
            }
        });
		} 
	});

});