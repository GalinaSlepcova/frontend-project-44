function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 20) + 1;
  }