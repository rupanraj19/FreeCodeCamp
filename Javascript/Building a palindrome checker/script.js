const userInput = document.getElementById('text-input')
const checkInputBtn = document.getElementById('check-btn')
const resultDiv = document.getElementById("result")

const checkPalindrome =(input)=>{
  if(input === "")
  {
    alert("Please input a value")
    return;
  }

  resultDiv.replaceChildren();

 const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
 const reverseInput = lowerCaseInput.split("").reverse().join("");

 if(lowerCaseInput === reverseInput){
    const p = document.createElement("p");
    p.textContent = `${input} is a palindrome`;
    resultDiv.appendChild(p);
 }else{
    const p = document.createElement("p");
    p.textContent = `${input} is not a palindrome`;
    resultDiv.appendChild(p);
 }
}

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
})

checkInputBtn.addEventListener('click', () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
})