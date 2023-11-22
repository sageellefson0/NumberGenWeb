
window.onload = function () {
  let slotElements = document.querySelectorAll(".slots");
  let numberPlaceholder = document.getElementById("numberPlaceholder");

  let numList = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
  let randomNumber;


  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const slot4 = document.getElementById("slot4");
  const slot5 = document.getElementById("slot5");
  const slot6 = document.getElementById("slot6");
  const slot7 = document.getElementById("slot7");
  const slot8 = document.getElementById("slot8");
  const slot9 = document.getElementById("slot9");
  const slot10 = document.getElementById("slot10");


  // Handle the click event for the generateButton
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", function () {
    generateRandomNumber();
    generateButton.disabled = true;
  });

    // Handle the click event for the restartButton
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", function () {
      restartButtonOperation();
    });

    // restartButton function
    // ...

// restartButton function
function restartButtonOperation() {
  numberPlaceholder.innerHTML = "&nbsp;";
    numList = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

  // Reset the text content of each slot
  slot1.innerText = "1";
  slot2.innerText = "2";
  slot3.innerText = "3";
  slot4.innerText = "4";
  slot5.innerText = "5";
  slot6.innerText = "6";
  slot7.innerText = "7";
  slot8.innerText = "8";
  slot9.innerText = "9";
  slot10.innerText = "10";

  // Enable all slots
  enableAllSlots();

  generateButton.disabled = false;
}

function enableAllSlots() {
  slot1.disabled = false;
  slot2.disabled = false;
  slot3.disabled = false;
  slot4.disabled = false;
  slot5.disabled = false;
  slot6.disabled = false;
  slot7.disabled = false;
  slot8.disabled = false;
  slot9.disabled = false;
  slot10.disabled = false;
}

// ...


    
  // generateRandomNumber function 
  function generateRandomNumber() {
    if (numList.length >= 1000) {
      numberPlaceholder.innerText = "You have run out of original numbers! Please close and reopen the application.";
    } else {
      const rand = Math.floor(Math.random() * 1000) + 1;
      let newRandomNumber;
      do {
        newRandomNumber = Math.floor(Math.random() * 1000) + 1;
      } while (numList.includes(newRandomNumber));
  
      // Check if the new number can fit into the list
      randomNumber = newRandomNumber;
      numberPlaceholder.innerText = String(randomNumber);
    }
  }
  


  slot1.addEventListener("click", setSlot1);

  function setSlot1() {
    slot1.innerText = numberPlaceholder.innerText;
    slot1.disabled = true;
    generateRandomNumber();
    numList.splice(0,1,slot1.innerText)
    console.log(numList);
    orderCheck();


  }

  slot2.addEventListener("click", setSlot2);

  function setSlot2() {
    slot2.innerText = numberPlaceholder.innerText;
    slot2.disabled = true;
    generateRandomNumber();
    numList.splice(1,1,slot2.innerText)
    console.log(numList);
    orderCheck();

  }

  slot3.addEventListener("click", setSlot3);

  function setSlot3() {
    slot3.innerText = numberPlaceholder.innerText;
    slot3.disabled = true;
    generateRandomNumber();
    numList.splice(2,1,slot3.innerText)
    console.log(numList);
    orderCheck();

  }

  slot4.addEventListener("click", setSlot4);

  function setSlot4() {
    slot4.innerText = numberPlaceholder.innerText;
    slot4.disabled = true;
    generateRandomNumber();
    numList.splice(3,1,slot4.innerText)
    console.log(numList);
    orderCheck();

  }

  slot5.addEventListener("click", setSlot5);
  function setSlot5() {
    slot5.innerText = numberPlaceholder.innerText;
    slot5.disabled = true;
    generateRandomNumber();
    numList.splice(4,1,slot5.innerText)
    console.log(numList);
    orderCheck();
  }


  function isInNumericalOrderIgnoreZeros(list) {
    // Filter out the zeros
    const filteredList = list.filter(num => num !== "0");
    
    // Check if the filtered list is in any sequential order
    for (let i = 0; i < filteredList.length - 1; i++) {
      const currentNum = parseInt(filteredList[i]);
      const nextNum = parseInt(filteredList[i + 1]);
    
      // Check if the next number is greater than the current one
      if (nextNum <= currentNum) {
        return false;
      }
    }
    
    return true;
  }

  function orderCheck(){
    if (isInNumericalOrderIgnoreZeros(numList)) {
      console.log("List is in order, ignoring 0s.");
    }
    else{
      numberPlaceholder.innerText = String("You have lost.");
      disableSlots();
    }
  }
  
  
  

  function disableSlots(){
    slot1.disabled = true;
    slot2.disabled = true;
    slot3.disabled = true;
    slot4.disabled = true;
    slot5.disabled = true;
    slot6.disabled = true;
    slot7.disabled = true;
    slot8.disabled = true;
    slot9.disabled = true;
    slot10.disabled = true;
    generateButton.disabled = true;
  }


}





