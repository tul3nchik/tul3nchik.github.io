var preload = document.getElementById("preloader");


preload.style.background = '#A9A9A9';


window.onload = function() {
	setTimeout(function() {
		let start = Date.now(); 
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			if (timePassed >= 2000) {
				clearInterval(timer);
				return; }
				draw(timePassed); }, 20);
		function draw(timePassed) {
			preload.style.top = timePassed + 'px'; } }, 1000); };

function contacts() {
	var contacts = document.getElementById('contacts');
	if(contacts.style.visibility != 'visible')
		contacts.style.visibility = 'visible';
	else
		contacts.style.visibility = 'hidden';
}


function dmode() {
	var value = 'dstyle.css';
    $('link#maincss').attr('href', value);
    var dark = document.getElementById('dark');
    dark.style.display = 'none';
}


function lmode() {
	var value = 'style.css';
    $('link#maincss').attr('href', value);
    var dark = document.getElementById('dark');
    dark.style.display = '';
}

function newpage(pnamen) {
    var pnamen = document.getElementById(pnamen);
    pnamen.style.display = '';

    var mpage = document.getElementById('mainblocks');
    mpage.style.display = 'none';

}

function back(pnameb) {
    var pnameb = document.getElementById(pnameb);
    pnameb.style.display = 'none';

    var mpage = document.getElementById('mainblocks');
    mpage.style.display = '';
}