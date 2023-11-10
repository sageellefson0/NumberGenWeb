
  window.onload = function() {
    let slotElements = document.querySelectorAll(".slots");
    let numberPlaceholder = document.getElementById("numberPlaceholder");

    let numList = ["1", "2", "3","4","5","6","7","8","9","10"];
    let randomNumber;
  
 
  
    // Handle the click event for the generateButton
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generateRandomNumber);
  
    // Initial random number placeholder
    setRandomNumberPlaceholder();

    function generateRandomNumber() {
        if (numList.length >= 1000) {
          numberPlaceholder.innerText = "You have run out of original numbers! Please close and reopen the application.";
        } else {
          const rand = Math.floor(Math.random() * 1000) + 1;
          let newRandomNumber;
          do {
            newRandomNumber = Math.floor(Math.random() * 1000) + 1;
          } while (numList.includes(newRandomNumber));
      
          randomNumber = newRandomNumber;
          numberPlaceholder.innerText = String(randomNumber);
          if (isInNumericalOrderIgnoreZeros(numList)) {
            console.log("List is in order, ignoring 0s.");
          }
        }
      }
      
  };

  
  
  