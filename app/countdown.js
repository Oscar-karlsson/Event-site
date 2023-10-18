const targetDate = new Date('2023-10-22 12:00:00').getTime();

// Update the countdown every second
const interval = setInterval(function() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    // You can do something when the countdown reaches 0 here
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
  }
}, 1000);