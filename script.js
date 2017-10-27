// script.js

// custom function 
function calculateTip() {
	
	// store the data of the inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;
	
	// quick validation
	if(billAmount === "" || serviceQuality == 0) {
		window.alert("please entrer some values to get this application working!");
		return; // this will prevent the function from running until the user fix it
	}
	
	// check to see if this input is empty or less than or equal to 1
	if(numPeople === "" || numPeople <= 1){
		numPeople = 1;
		
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}
	
	// The Math!
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);
	
	
	// Display the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };


// Create a clear button
// when clicked
    //it should clear all the input form + not display the tip amount for each person, and set it to 0

function clearForm() {
    if (clearButton ) {
        document.getElementById("theForm").reset();
        document.getElementById("totalTip").style.display = "none";
        document.getElementById("tip").innerHTML = "";
    }
}













