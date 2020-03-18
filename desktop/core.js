function showhide(name1, name2)
{
    var showhide1 = document.getElementById(name1);
    var showhide2 = document.getElementById(name2);
    if(showhide1.style.display != 'block'){
        showhide1.style.display = 'block';
        showhide2.style.display = 'none';}
    else
        showhide1.style.display = 'none';
}

function hide_metric() {
    var cS = document.getElementById("paper_den");
    var metric = document.getElementById("metr");
    var n = cS.selectedIndex;
	if (n == 5) metric.style.display = "none"; else metric.style.display = "";
}

function calculate() {
    var pt = document.getElementById("paper_type");
    var ptype = pt.selectedIndex;

    var prt = document.getElementById("print_type");
    var prtype = prt.selectedIndex;

    var pd = document.getElementById("paper_den");
    var pdens = pd.selectedIndex;

    var f = document.getElementById("fill");
    var fill = f.selectedIndex;

    var pn = document.getElementById("inp_pages");
    var pnums = pn.value;

    var resup = document.getElementById("result_u");
    var resdown = document.getElementById("result_d");

    var op = 0;

    var total_price = 0;
    //Монохромная
    if (prtype == 0){
    	if (pdens == 0){
    		if (ptype == 3) op = 8;
    		if (ptype == 4) op = 4;
    	 }
    	 if (pdens == 1){
    	 	if (ptype == 3) op = 12;
    	 	if (ptype == 4) op = 16;
    	 }
    	 if (pdens == 2){
    	 	if (ptype == 1) op = 120;
    	 	if (ptype == 2) op = 60;
    	 	if (ptype == 3) op = 16;
    	 	if (ptype == 4) op = 18;
    	 }
    	 if (pdens == 3){
    	 	if (ptype == 3) op = 20;
    	 	if (ptype == 4) op = 10;
    	 }
    	 if (pdens == 4){
    	 	if (ptype == 3) op = 30;
    	 	if (ptype == 4) op = 15;
    	 }
    	}
    //Лазерная
    if (prtype == 1){

    	if (pdens == 0){
    		if (ptype == 3){
    			if (fill = 0) op = 30;
    	 		if (fill = 1) op = 50;
    	 		}
    	 	if (ptype == 4){
    	 		if (fill = 0) op = 15;
    	 		if (fill = 1) op = 25;
    	 		}
    	 }

    	 if (pdens == 1){
    	 	if (ptype == 3){
    	 		if (fill = 0) op = 40;
    	 		if (fill = 1) op = 60;
    	 		}
    	 	if (ptype == 4){
    	 		if (fill = 0) op = 20;
    	 		if (fill = 1) op = 30;
    	 		}
    	 }

    	 if (pdens == 2){
    	 	if (ptype == 3){
    	 		if (fill = 0) op = 40;
    	 		if (fill = 1) op = 60;
    	 		}
    	 	if (ptype == 4){
    	 		if (fill = 0) op = 20;
    	 		if (fill = 1) op = 30;
    	 		}
    	 }

    	 if (pdens == 3 || pdens == 4){
    	 	if (ptype == 3){
    	 		if (fill == 0) op = 50;
    	 		if (fill == 1) op = 70;
    	 		}
    	 	if (ptype == 4){
    	 		if (fill == 0) op = 25;
    	 		if (fill == 1) op = 35;
    	 		}
    	 }
    	}
    	//Струйный
    	if (prtype == 2){
    		if (pdens == 2 && pdens == 3) {
    			if (ptype == 0) {if (fill == 0 || fill == 1) op = 550};
    			if (ptype == 1) {if (fill == 0 || fill == 1) op = 300};
    			if (ptype == 2) {if (fill == 0 || fill == 1) op = 150};
    		}
    		if (pdens == 5){
    			if (ptype == 4) {if (fill == 0 || fill == 1) op = 35};
    			if (ptype == 5) {if (fill == 0 || fill == 1) op = 20};
    			if (ptype == 6) {if (fill == 0 || fill == 1) op = 10};
    		}
    	}
    	
    	if (op != 0) {
    		total_price = op * pnums;
    		resup.innerHTML = "Цена за одну страницу: " + op + " руб.";
    		resdown.innerHTML = "Итоговая сумма: " + total_price + " руб.";
    	}
    	else{
    		resup.innerHTML = "Введены неправильные настройки!";
    		resdown.innerHTML = null;
    	}
    }


function calculate_lam() {
	var ptl = document.getElementById("paper_type_lam");
    var ptlIn = ptl.selectedIndex;

    var pdl = document.getElementById("paper_den_lam");
    var pdlIn = pdl.selectedIndex;

    var ipl = document.getElementById("inp_pages_lam");
    var iplIn = ipl.value;

    var resupl = document.getElementById("result_u_l");
    var resdownl = document.getElementById("result_d_l");

    var opl = 0;

    var total_price_lam = 0;

    if (pdlIn == 0) {
    	if (ptlIn == 0) opl = 20;
    	if (ptlIn == 1) opl = 10;
    	if (ptlIn == 2) opl = 5;
    }

    if (pdlIn == 1) {
    	if (ptlIn == 0) opl = 30;
    	if (ptlIn == 1) opl = 15;
    	if (ptlIn == 2) opl = 10;
    }

    if (pdlIn == 2) {
    	if (ptlIn == 0) opl = 120;
    	if (ptlIn == 1) opl = 60;
    	if (ptlIn == 2) opl = 30;
    }

    if (opl != 0) {
    	total_price_lam = opl * iplIn;
    	resupl.innerHTML = "Цена за одну страницу: " + opl + " руб.";
    	resdownl.innerHTML = "Итоговая сумма: " + total_price_lam + " руб.";
    }
    else if (opl = 0){
    	resupl.innerHTML = "Введены неправильные настройки!";
    	resdownl.innerHTML = null;
    }
}

function showalpha() {
    var showal = document.getElementById('alpha');
    if(showal.style.display != 'block'){
        showal.style.display = 'block';
    }
    else
        showal.style.display = 'none';
}