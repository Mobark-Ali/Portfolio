const menuBtn=document.querySelector('.menu-btn');
const burger=document.querySelector('.menu-btn-burger');
const nav=document.querySelector('.nav');
const menuNav=document.querySelector('.menu-nav');
const body=document.querySelector('body');
const switchMood=document.querySelector('light');

//const navItem=document.querySelectorAll
let mood=false;
let showMenu= false;


menuBtn.addEventListener("click",toggleMenu);

function toggleMenu(){
	if(!showMenu){
		burger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		//body.classList.add('light');
		showMenu=true;
	}else{
		//body.classList.remove('light');
		burger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		showMenu=false;
	}
}