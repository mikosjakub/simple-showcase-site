const time = document.getElementById("time");

// Show Time
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
};

// Add Zeros
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

showTime();
