function updateCountdownValue(id, value) {
    const countdownItem = document.getElementById(id);
    const currentNumber = countdownItem.querySelector('.current');
    const previousNumber = countdownItem.querySelector('.previous');
  
    previousNumber.textContent = currentNumber.textContent;
    currentNumber.textContent = value;
    setTimeout(() => {
      currentNumber.style.transform = 'rotateX(0deg)';
      currentNumber.style.opacity = '1';
      previousNumber.style.transform = 'rotateX(-90deg)';
      previousNumber.style.opacity = '0';
    }, 50);
  }
  
  // Example usage:
  updateCountdownValue('days', '05');
  updateCountdownValue('hours', '10');
  updateCountdownValue('minutes', '30');
  updateCountdownValue('seconds', '45');