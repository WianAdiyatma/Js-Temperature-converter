const temperature = document.getElementById('temperature')
const btn = document.querySelector(".btn")
const options = document.querySelectorAll("option")
const resultText = document.querySelector(".resultText")
const alerts = document.querySelector(".alert")



const farenheitValue = options[0].value; // "farenheit"
const celsiusValue = options[1].value;    // "celsius"

const fromUnit = document.querySelector('.selector1');
const toUnit = document.querySelector('.selector2');

// Add event listeners
fromUnit.addEventListener('change', function() {
  console.log('From unit changed to:', this.value);

});

toUnit.addEventListener('change', function() {
  console.log('To unit changed to:', this.value);
});

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  let result;
  let type;
  btn.addEventListener('click', () => {
      const temperatures = temperature.value;
      if(temperatures == '') {
      resultText.textContent = "Please input a value!"; // Moved inside click handler
    } 
      else if(fromUnit.value === "farenheit" && toUnit.value === "celsius") {
          result = fahrenheitToCelsius(temperatures);
          type = "Celcius."
          resultText.textContent = "Converted temperature: "+Math.round(result)+"° "+type; // Moved inside click handler
      } else if(fromUnit.value === "celsius" && toUnit.value === "farenheit") {
          result = celsiusToFahrenheit(temperatures);
          type = "Farenheit."
          resultText.textContent = "Converted temperature: "+Math.round(result)+"° "+type; // Moved inside click handler
        } else {
            resultText.textContent = "Please use different unit!"; // Handle other cases
        }
  });