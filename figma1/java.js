var state = true; // The starting state of the image - false means it's hidden
document
  .querySelector("#changeImageButton")
  .addEventListener("click", function () {
    state = !state; // Toggle between true and false each time the button is pressed
    if (state) {
      document.querySelector(".background").style.animation =
        "myAnimation 10s infinite alternate ease";
      document.querySelector(".background").style.webkitAnimation =
        "myAnimation 10s infinite alternate ease";
    } else {
      document.querySelector(".background").style.animation = "";
      document.querySelector(".background").style.webkitAnimation = "";
    }
  });
