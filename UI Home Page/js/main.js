var radioSwitch = true;
var isNavOpen = false;
var song = 0;

function openNav() {
if (document.getElementById("mySidenav").style.width == "0px") {
  document.getElementById("mySidenav").style.width = "355px";
  document.getElementById("menu-button").style.marginLeft = "355px";
  isNavOpen = true;
  $('#menu-button').attr('src','./media/menu/close-menu.svg');
} else {
	document.getElementById("mySidenav").style.width = "0px";
	document.getElementById("menu-button").style.marginLeft = "0px";
	$('#menu-button').attr('src','./media/menu/menu.svg');
	isNavOpen = false;
}
}

function toggleRadio() {
	if (radioSwitch)
	$('#radioSwitch').attr('src','./media/music/fm.svg');
	else 
	$('#radioSwitch').attr('src','./media/music/am.svg');
	radioSwitch = !radioSwitch;
}

function upArrow() {
  alert("wow")
}
//Change the song
function switchSong(){
	
	song = (song == 0) ? 1 : 0;
	
	
    var audio = document.getElementById("audio");
	var source = document.getElementById("source");
	if(isNavOpen == false) {
		openNav();
	}else{
		setTimeout(function(){
		openNav();
		}, 2000);
	}
	if(song == 1) {
		source.src = './media/musicmedia/Bacca.mp3';
		//song = 0;
	}else{
		source.src = './media/musicmedia/Kappa.mp3';
		//song = 1;
	}
	audio.load();
	audio.play();
}
//Updates the slider value based on steering input
function toggleVol_(){
	let btn = document.getElementById("volume");
	let ls = document.getElementById("volume_ls");
	
	let lse = document.getElementById("myRange1");
	let lse2 = document.getElementById("myRange2");
	if(btn.style.border == ''){
		  
		if(isNavOpen == false) {
			openNav();
		}
		btn.style.border = '4px solid blue';
		
		 
	}
	ls.click();
	//Update the slider value
	lse.value = lse2.value;
	
	
	
}
function goSetting(){
	
	let ls = document.getElementById("settings");
	if(isNavOpen == false) {
		openNav();
	}
	ls.click();
	
}
function goSpotify(){
	
	let ls = document.getElementById("spotify");
	if(isNavOpen == false) {
		openNav();
	}
	ls.click();
	
}
function goRadio(){
	
	let ls = document.getElementById("radio");
	if(isNavOpen == false) {
		openNav();
	}
	ls.click();
	
}
function goAux(){
	
	let ls = document.getElementById("aux");
	if(isNavOpen == false) {
		openNav();
	}
	ls.click();
	
}
//Toggles the menu for volume
function toggleVol(){
	
	let btn = document.getElementById("volume");
	let ls = document.getElementById("volume_ls");
	  if(btn.style.border == ''){
		  
		 if(isNavOpen == false) {
			 openNav();
		 }
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		  if(isNavOpen == true) {
			 openNav();
			}
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
}
//Toggles the menu for Bluetooth
function toggleBlueTooth(){
	let btn = document.getElementById("bluetooth");
	let ls = document.getElementById("bluetooth_ls");
	if(btn.style.border == ''){
		 if(isNavOpen != true) {
			 openNav();
		 }
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		    if(isNavOpen == true) {
			 openNav();
			}
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
}
//Toggles the menu for Wifi
function toggleWifi(){
	let btn = document.getElementById("wifi");
	let ls = document.getElementById("wifi_ls");
	if(btn.style.border == ''){
		 if(isNavOpen != true) {
			 openNav();
		 }
		 btn.style.border = '4px solid blue';
		
		  
	  }else{
		    if(isNavOpen == true) {
			 openNav();
			}
		  btn.style.border = '';
		  btn.style.backgroundColor = '';
	
	  }
	  ls.click();
}
//Toggles the menu for Voice
function toggleNotBar(){
	
	 let x = document.getElementById("togBar");
	  if(x.style.display == "none"){
		 
		  x.style.display = "block";
		  
	  }else{
		  
		  x.style.display="none";
	  }
}
document.getElementById("controls").contentWindow.document.getElementById("up").addEventListener("click, upArrow(), false");


