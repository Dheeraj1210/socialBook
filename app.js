
const settingMenu = document.querySelector(".settings-menu")
let dBtn = document.getElementById('dark-btn')
let text = document.getElementById("textarea")

settingsMenuToggle=()=>{
         settingMenu.classList.toggle("settings-menu-height")
}

dBtn.onclick = function(){
	dBtn.classList.toggle('dark-btn-on')
	document.body.classList.toggle('dark-theme')
	text.style.color = 'black';



	if(localStorage.getItem('theme') == 'light'){
	    localStorage.setItem('theme', 'dark')	
	}
	else{
		localStorage.setItem('theme', 'dark')
	}
}


if(localStorage.getItem('theme') == 'light'){
	dBtn.classList.remove('dark-btn-on')
	document.body.classList.remove('dark-theme')
}
else if(localStorage.getItem('theme') == 'dark'){
      dBtn.classList.add('dark-btn-on')
	  document.body.classList.add('dark-theme')	
}
else{
	localStorage.setItem('theme', 'light')
}


localStorage.setItem('theme', 'dark')
localStorage.getItem('theme')


