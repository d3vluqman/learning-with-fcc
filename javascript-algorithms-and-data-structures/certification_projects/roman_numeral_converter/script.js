const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = () => {
  const num = parseInt(numberInput.value);
  if (isNaN(num)) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let roman = "";
  let remaining = num;

  for (const [letter, value] of romanNumerals) {
    while (remaining >= value) {
      roman += letter;
      remaining -= value;
    }
  }

  output.textContent = roman;
};

convertBtn.addEventListener("click", convertToRoman);
