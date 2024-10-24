const darkThemeToggle = document.getElementById("dark-theme-toggle");

const toggleDarkTheme = () => {
  document.documentElement.classList.toggle("dark-theme");
};

darkThemeToggle.addEventListener("change", toggleDarkTheme);

// Accesibility Functionality
// const dyslexiaToggle = document.getElementById("dyslexia-toggle");

// const toggleDyslexiaTheme = () => {
//   document.documentElement.classList.toggle("dyslexia-theme");
// };

// Toggle.addEventListener("change", toggleDyslexiaTheme);

// const Toggle = document.getElementById("- -toggle");

// const toggle Theme = () => {
//   document.documentElement.classList.toggle(" -theme");
// };

// Toggle.addEventListener("change", toggle Theme);

let rev = 0;
carousel(rev);

function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1;
  carousel(rev);
}

function carousel(review) {
  let reviews = document.getElementsByClassName("review_item");

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }
  if (review < 0) {
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display = "block";
}
