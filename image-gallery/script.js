const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


// Create image data object

const images = [
  {
    filename: "pic1.jpg",
    alt: "Closeup of a human eye"
  },
  {
    filename: "pic2.jpg",
    alt: "Rock that looks like a wave"
  },
  {
    filename: "pic3.jpg",
    alt: "Purple and white pansies"
  },
  {
    filename: "pic4.jpg",
    alt: "Section of wall from a pharaoh's tomb"
  },
  {
    filename: "pic5.jpg",
    alt: "Large moth on a leaf"
  }
];


// Add images to thumbnail bar

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {

  const newImage = document.createElement("img");

  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;

  // Makes image keyboard accessible
  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);


  // Mouse click event
  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });


  // Keyboard Enter event
  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}


// Update large displayed image

function updateDisplayedImage(image) {

  displayedImage.src = image.src;
  displayedImage.alt = image.alt;

}


// Darken / Lighten button

btn.addEventListener("click", () => {

  if (btn.classList.contains("dark")) {

    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";

  } else {

    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";

  }

  // Toggle dark class
  btn.classList.toggle("dark");

});