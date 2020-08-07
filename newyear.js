const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("new-year-countdown");
const newYear = document.getElementById("new-year");

const currentYear = new Date().getFullYear();

// Get Date object for first day of next year
const newYearTime = new Date(`01 January ${currentYear + 1} 00:00:00`);

// Insert next year in DOM
newYear.innerText = currentYear + 1;

// Update countdown time
const updateCountdown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
	// If time value is lower than 10, we need to add '0'
	// To display it in HH:MM:SS format (rather than single H, S etc.)
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
// Run every second
setInterval(updateCountdown, 1000);
