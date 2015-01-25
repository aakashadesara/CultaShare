$( document ).ready(function() {
    Parse.initialize("A74VDEFq9sVeu9RaOLs0C2B4QxSEnlqQLsrtesZc", "4LrgyWjfgo9ujUUVkUQpVJZo2YiqzbVRc4b7ue26");
    
    var country = "America";

    $("#america").click(function(){ country = "America"; rewind(country); });
    $("#mexico").click(function(){ country = "Mexico"; rewind(country); });
    $("#china").click(function(){ country = "China"; rewind(country); });
    $("#india").click(function(){ country = "India"; rewind(country); });
    $("#japan").click(function(){ country = "Japan"; rewind(country); });
    $("#britain").click(function(){ country = "Britain"; rewind(country); });
    $("#france").click(function(){ country = "France"; rewind(country); });
    $("#russia").click(function(){ country = "Russia"; rewind(country); });
    $("#greece").click(function(){ country = "Greece"; rewind(country); });
    $("#australlia").click(function(){ country = "Australlia"; rewind(country); });


    rewind(country);
});

function rewind(country){
	var div = document.getElementById('imageHolder');
	div.innerHTML = "";

	document.getElementById('countriesNameTitle').innerHTML = country;

	var Client = Parse.Object.extend(country);
	var queryObject = new Parse.Query(Client);

	queryObject.find({
	    success: function (results) {
	        for (var i = 0; i < results.length; i++) {
	            /* alert("Foo:  " + results[i].get("foo")+ "\n" + 
	            	  "Link: " + results[i].get("link") + "\n" +
	            	  "Desc: " + results[i].get("description")); */
	            var link = results[i].get("link");
	            var description = results[i].get("description");
	            //alert(link);

	            var div = document.getElementById('imageHolder');
				div.innerHTML += "<div class=\"pure-u-1-4\" ><img class=\"pure-img-responsive\" src=\"" + link + " alt=\"Image\"><div id=\"descDiv\" > <p style=\"text-align: center;\">" + description + "</p></div></div>";

	        }
	        
	    },
	    error: function (error) {
	        alert("Error: " + error.code + " " + error.message);
	    }
	});
}