window.onload = init;
var i = 0; 
function init() {
	if (i == 0){
	i++;
	setTimeout(init, 1000);
	}
	else if (i <= 6) {
	var div = document.getElementById("images");
	var img = document.createElement("img");
	img.setAttribute("src", "images/paw.png");
	var paw = "paw"+ i;
	img.setAttribute("id", paw);
	div.appendChild(img);
	i++;
	setTimeout(init, 1000);
	}	
}		

