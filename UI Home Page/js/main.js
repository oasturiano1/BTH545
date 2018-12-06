function openNav() {
  document.getElementById("mySidenav").style.width = "580px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function upArrow() {
  alert("wow")
}

function toggleVol(){
	
	  if(document.getElementById("togVol").style.display == "none"){
		 
		  document.getElementById("togVol").style.display = "block";
		  
	  }else{
		  
		  document.getElementById("togVol").style.display="none";
	  }
}
document.getElementById("controls").contentWindow.document.getElementById("up").addEventListener("click, upArrow(), false");


