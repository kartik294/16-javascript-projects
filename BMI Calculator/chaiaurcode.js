document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.querySelector("button");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const resultsDiv = document.getElementById("results");

  calculateButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const height = parseFloat(heightInput.value); // Get height value and convert to float
    const weight = parseFloat(weightInput.value); // Get weight value and convert to float

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultsDiv.textContent = "Please enter valid height and weight values.";
    } else {
      const bmi = calculateBMI(height, weight);
      const bmiCategory = getBMICategory(bmi);

      resultsDiv.textContent = `Your BMI is: ${bmi.toFixed(
        2
      )} - ${bmiCategory}`;
    }
  });

  // Function to calculate BMI
  function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / height (m)^2
    return weight / ((height / 100) * (height / 100));
  }

  // Function to get BMI category
  function getBMICategory(bmi) {
    if (bmi < 18.6) {
      return "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      return "Normal Range";
    } else {
      return "Overweight";
    }
  }
});
