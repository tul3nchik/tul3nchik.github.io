window.onload = function() {  //Функция загрузочного экрана
	    setTimeout(function() {
		let start = Date.now(); 
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			if (timePassed >= 2000) {
				clearInterval(timer);
				return; }
				draw(timePassed); }, 20);
		function draw(timePassed) {
			document.getElementById('prel').style.left = timePassed + 'px'; } }, 1000);
	}

function toggle(getidf, getids)//Функция переключения отображения элементов (переключение между элементами)
{
	var getidf = document.getElementById(getidf);
    getidf.style.display = 'none';

    var getids = document.getElementById(getids);
    getids.style.display = 'block';
}

function showhide(name)//Функция переключения отображения элементов (показ и скорытие)
{
    var showhide = document.getElementById(name);
    if(showhide.style.display != 'block')
        showhide.style.display = 'block';
    else
        showhide.style.display = 'none';
}

function showmenu() //Функция показа меню
{
    var maincont = document.getElementById("main");
    if (maincont.style.marginLeft == '') 
    	{
    	let start = Date.now();
    	let timer = setInterval(function() {
    		let timePassed = Date.now() - start;
    		maincont.style.marginLeft = timePassed / 65 + 'vw';
    		if (timePassed > 900) clearInterval(timer);
    	}, 20);
    }
    else maincont.style.marginLeft = '';
}
// Индекс слайда по умолчанию
var slideIndex = 1;

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

//Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Функция перехода на нужный слайд
function chooseSlide(idoflist) {
    var cS = document.getElementById(idoflist);
    var n = cS.selectedIndex;
    var s = cS.options[n].value;
     if(n) showSlides(slideIndex = s);
}

// Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Основная функция слайдера 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    //Для точек переключения слайдов
    //var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Для точек переключения слайдов
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndex - 1].style.display = "block";
    //Для точек переключения слайдов
    //dots[slideIndex - 1].className += " active";
}