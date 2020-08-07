const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
// const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const changeSlide = (direction = "next") => {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  const nextSlide = () => {
    // Check for next slide
		// If there is none, start from beginning
    current.nextElementSibling
      ? current.nextElementSibling.classList.add("current")
      : slides[0].classList.add("current");
  };

  const prevSlide = () => {
    // Check for prev slide
		// If there is none, start from end
    current.previousElementSibling
      ? current.previousElementSibling.classList.add("current")
      : slides[slides.length - 1].classList.add("current");
  };
  switch (direction) {
    case "next":
      nextSlide();
      break;
    case "prev":
      prevSlide();
      break;
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  changeSlide("next");
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  changeSlide("prev");
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
