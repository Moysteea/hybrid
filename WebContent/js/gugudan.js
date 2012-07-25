var GUGUDAN = {
	name : "±¸±¸´Ü",
	gugudan : function() {
		var allTag = "";
		for ( var i = 2; i <= 9; i++) {
			allTag += this.printDan(i);
		}
		// document.write(allTag);
		var result = document.getElementById("result");
		result.innerHTML = allTag;
	},
	printDan : function(i) {
		var htmlTag = "<ul>";
		for ( var j = 1; j <= 9; j++) {
			htmlTag += ("<li>" + i + " * " + j + " = " + i * j + "</li>");
		}
		htmlTag += ("</ul>");
		return htmlTag;
	}
};
