function openNav() {
	document.getElementsByClassName("left-block")[0].style.width = "25" + '%';
	document.getElementById("openNav").style.display = "none";
	}
function closeNav() {
	document.getElementsByClassName("left-block")[0].style.width = "0";
	document.getElementById("openNav").style.display = "block";
	}
document.getElementById("down").onclick = function() {
	this.classList.toggle("active");
}