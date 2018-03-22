var i = 1

function openSideNavbar(){
	if(i){ 
		document.getElementById('side').style.width = '250px';
		i= 0;
	} else{
		document.getElementById('side').style.width = '0';
		i = 1;
	}
}
function closeSideNavbar(){
	document.getElementById('side').style.width = '0px';
}