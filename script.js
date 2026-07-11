// This function runs when the user clicks the Calculate Bill button.
function calculateBill() {
    // Read the value from the input box.
    var inputValue = document.getElementById("units").value;

    // Get the HTML elements where messages and results will be shown.
    var errorMessage = document.getElementById("errorMessage");
    var slabCalculation = document.getElementById("slabCalculation");

    // Check whether the input box is empty.
    if (inputValue === "") {
        errorMessage.innerHTML = "Please enter the number of units.";
        return;
    }

    // Convert the input text into a number, just like taking an integer input in C++.
    var units = Number(inputValue);

    // Check for negative, decimal, or invalid input values.
    if (units < 0 || isNaN(units) || units % 1 !== 0) {
        errorMessage.innerHTML = "Please enter a valid whole number greater than or equal to 0.";
        return;
    }

    // Clear any previous error message after valid input.
    errorMessage.innerHTML = "";

    // Create variables for the bill amount, current slab price, and output text.
    var totalBill = 0;
    var unitPrice = 0;
    var calculationText = "";

    // First slab: charge all units when consumption is 100 or less.
    if (units <= 100) {
        totalBill = units * 1.50;
        unitPrice = 1.50;
        calculationText = units + " × 1.50 = ₹" + totalBill.toFixed(2);
    }
    // Second slab: first 100 units at 1.50, remaining units at 2.50.
    else if (units <= 200) {
        totalBill = (100 * 1.50) + ((units - 100) * 2.50);
        unitPrice = 2.50;
        calculationText = "100 × 1.50 = ₹150.00<br>" + (units - 100) + " × 2.50 = ₹" + ((units - 100) * 2.50).toFixed(2);
    }
    // Third slab: add charges from the first two slabs and charge remaining units at 4.00.
    else if (units <= 300) {
        totalBill = (100 * 1.50) + (100 * 2.50) + ((units - 200) * 4.00);
        unitPrice = 4.00;
        calculationText = "100 × 1.50 = ₹150.00<br>100 × 2.50 = ₹250.00<br>" + (units - 200) + " × 4.00 = ₹" + ((units - 200) * 4.00).toFixed(2);
    }
    // Final slab: add all earlier slab charges and charge extra units at 6.00.
    else {
        totalBill = (100 * 1.50) + (100 * 2.50) + (100 * 4.00) + ((units - 300) * 6.00);
        unitPrice = 6.00;
        calculationText = "100 × 1.50 = ₹150.00<br>100 × 2.50 = ₹250.00<br>100 × 4.00 = ₹400.00<br>" + (units - 300) + " × 6.00 = ₹" + ((units - 300) * 6.00).toFixed(2);
    }

    // Display the final output on the webpage.
    document.getElementById("displayUnits").innerHTML = units;
    document.getElementById("displayPrice").innerHTML = "₹" + unitPrice.toFixed(2) + "/Unit";
    slabCalculation.innerHTML = calculationText;
    document.getElementById("totalBill").innerHTML = "₹" + totalBill.toFixed(2);
}

// This function clears the input, message, and output when Reset is clicked.
function resetCalculator() {
    document.getElementById("units").value = "";
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("displayUnits").innerHTML = "-";
    document.getElementById("displayPrice").innerHTML = "-";
    document.getElementById("slabCalculation").innerHTML = "Enter units and click Calculate Bill.";
    document.getElementById("totalBill").innerHTML = "₹0.00";
}
