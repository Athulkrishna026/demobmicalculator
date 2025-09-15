    function calculateBMI() {
      let height = document.getElementById("height").value;
      let weight = document.getElementById("weight").value;
      let result = document.getElementById("result");

      if (height === "" || weight === "" || height <= 0 || weight <= 0) {
        result.innerHTML = "⚠ Please enter valid values!";
        result.style.color = "red";
        return;
      }

      // BMI formula
      let bmi = (weight / ((height/100) * (height/100))).toFixed(1);

      let status = "";
      if (bmi < 18.5) {
        status = "Underweight";
        result.style.color = "#00bfff";
      } else if (bmi < 25) {
        status = "Normal";
        result.style.color = "green";
      } else if (bmi < 30) {
        status = "Overweight";
        result.style.color = "#ffcc00";
      } else {
        status = "Obese";
        result.style.color = "red";
      }

      result.innerHTML = `Your BMI is ${bmi} (${status})`;
    }