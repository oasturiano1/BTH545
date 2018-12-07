function openNav() {
  document.getElementById("mySidenav").style.width = "25%";
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
	let ls = document.getElementById("volume_ls");
	  if(btn.style.border == ''){
		 openNav();
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		  closeNav();
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
}
function toggleBlueTooth(){
	let btn = document.getElementById("bluetooth");
	let x = document.getElementById("togBar");
	let ls = document.getElementById("bluetooth_ls");
	if(btn.style.border == ''){
		 openNav();
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		  closeNav();
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
}
function toggleWifi(){
	let btn = document.getElementById("wifi");
	let x = document.getElementById("togBar");
	let ls = document.getElementById("wifi_ls");
	if(btn.style.border == ''){
		 openNav();
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		  closeNav();
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
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


