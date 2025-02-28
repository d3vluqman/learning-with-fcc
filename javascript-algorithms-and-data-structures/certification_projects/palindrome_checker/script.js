const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

const palindromeChecker = () => {
  let userInput = input.value;
  if (userInput === "") {
    result.innerText = "Please input a value";
    alert("Please input a value");
    result.style.color = "#FF0800";
    return;
  }

  let cleanInput = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedInput = cleanInput.split("").reverse().join("");

  if (cleanInput === reversedInput) {
    result.innerText = `${userInput} is a palindrome`;
    result.style.color = "#283618";
  } else {
    result.innerText = `${userInput} is not a palindrome`;
    result.style.color = "#FF0800";
  }
};

checkBtn.addEventListener("click", palindromeChecker);
