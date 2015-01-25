$( document ).ready(function() {
    Parse.initialize("A74VDEFq9sVeu9RaOLs0C2B4QxSEnlqQLsrtesZc", "4LrgyWjfgo9ujUUVkUQpVJZo2YiqzbVRc4b7ue26");
    
    var country;
	
	$("#upload").click(function(){

		var countryName = $("#country").val();
		var col = $("#col").val();
		var link = $("#link").val();
		var description = $("#description").val();

		var Extension = Parse.Object.extend(countryName);
		country = new Extension();

		country.save({foo: col}).then(function(object) {
		});
		country.save({link: link}).then(function(object) {
		});
		country.save({description: description}).then(function(object) {
		});
	});

});