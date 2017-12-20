
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		    if (sizeArray[i].checked) {
		    		var selectedSize = sizeArray[i].value;
		    		text1 = text1+selectedSize+"<br>";
		    }
	}
	if (selectedSize === "Personal Pizza") {
			sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
			sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
			sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
			sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getmeat(runningTotal,text1);
};

function getmeat(runningTotal,text1) {
		var meatTotal = 0;
		var selectedMeat = [];
		var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++ ) {
			if(meatArray[j].checked) {
					selectedMeat.push(meatArray[j].value);
					console.log("selected meat item: ("+meatArray[j].value+")");
					text1 = text1+meatArray[j].value+"<br>";
			}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
			meatTotal = (meatCount - 1);
	} else {
			meatTotal = 0;
	}
	runningTotal = (runningTotal + meatCount);
	getVeggie(runningTotal,text1);
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
			if (veggieArray[j].checked) {
					selectedVeggie.push(veggieArray[j].value);
					console.log("selected veggies item: ("+veggieArray[j].value+")");
					text1 = text1+veggieArray[j].value+"<br>";
			}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
			veggieCount = (veggieCount - 1);
	} else {
			veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieCount);
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		    if (cheeseArray[i].checked) {
		    		var selectedCheese = cheeseArray[i].value;
		    		text1 = text1+selectedCheese+"<br>";
		    }
	}
	if (selectedCheese === "No cheese") {
			cheeseTotal = 0;
	} else if (selectedCheese === "Regular cheese") {
			cheeseTotal = 0;
	} else if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
	} 
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		    if (sauceArray[i].checked) {
		    		var selectedSauce = sauceArray[i].value;
		    		text1 = text1+selectedSauce+"<br>";
		    }
	}
	if (selectedSauce === "Marinara sauce") {
			SauceTotal = 0;
	} else if (selectedSauce === "White sauce") {
			sauceTotal = 0;
	} else if (selectedSauce === "Barbeque sauce") {
			sauceTotal = 0;
	} else if (selectedSauce === "No sauce") {
			sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	getCrust(runningTotal,text1)
};

function getCrust(runningTotal,text1) {
	
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		    if (crustArray[i].checked) {
		    		var selectedCrust = crustArray[i].value;
		    		text1 = text1+selectedCrust+"<br>";
		    }
	}
	if (selectedCrust === "Plain Crust") {
			crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
			crushTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
			crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
			crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};