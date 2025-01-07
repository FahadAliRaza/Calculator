const input = document.getElementById("user-input"); // <-- it represent the ans box --> // 

// Adding event listener to number buttons
const number = document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (input.innerText === "NaN" || input.innerText === "0"){                                                                                                            
      input.innerText = "";
    }
    
    input.innerText += e.target.innerHTML.trim();
  });
});


////////////////////////////////////////////////////////////////////////////


// Adding event listener to operation buttons
const calculate = document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = input.innerText.substring(input.innerText.length - 1);

    // Handle the equal sign (=)
    if (e.target.innerHTML === "=") {
      // Check if the last value is a number before evaluating
      if (!isNaN(lastValue)) {
        try {
          input.innerText = eval(input.innerText); // Evaluate the expression
        } catch (error) {
          input.innerText = "NaN"; // If the expression is invalid, show NaN
        }
      }
    }
    // Handle clear button (AC)
    else if (e.target.innerHTML === "AC") {
      input.innerText = "0"; // Reset the display
    }
    // Handle delete button (DEL)
    else if (e.target.innerHTML === "DEL") {
      input.innerText = input.innerText.substring(0, input.innerText.length - 1);
      if (input.innerText.length === 0) {
        input.innerText = "0"; // If the display is empty, reset to "0"
      }
    }
    // Handle other operations (+, -, *, /)
    else {
      // If the last value is a number, append the operation to the display
      if (!isNaN(lastValue)) {
        input.innerText += e.target.innerHTML;
      }
    }
  });
});
