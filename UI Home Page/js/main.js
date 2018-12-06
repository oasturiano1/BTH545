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
	
	let btn = document.getElementById("volume");
	let x = document.getElementById("togBar");
	  if(x.style.display == "none"){
		 
		 btn.style.border = '4px solid blue';
		  x.style.display = "block";
		  
	  }else{
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
		  x.style.display="none";
	  }
}
function toggleBlueTooth(){
	let btn = document.getElementById("bluetooth");
	let x = document.getElementById("togBar");
	  if(x.style.display == "none"){
		 
		 btn.style.border = '4px solid blue';
		  x.style.display = "block";
		  
	  }else{
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
		  x.style.display="none";
	  }
}
function toggleWifi(){
	let btn = document.getElementById("wifi");
	let x = document.getElementById("togBar");
	  if(x.style.display == "none"){
		 
		 btn.style.border = '4px solid blue';
		  x.style.display = "block";
		  
	  }else{
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
		  x.style.display="none";
	  }
}
function toggleNotBar(){
	
	 let x = document.getElementById("togBar");
	  if(x.style.display == "none"){
		 
		  x.style.display = "block";
		  
	  }else{
		  
		  x.style.display="none";
	  }
}
document.getElementById("controls").contentWindow.document.getElementById("up").addEventListener("click, upArrow(), false");


