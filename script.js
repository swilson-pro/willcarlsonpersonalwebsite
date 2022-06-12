const h2 = document.createElement("h2");
h2.textContent = "This was a great pre-work assignment!";

document.querySelector("body").appendChild(h2);

const box = document.getElementById('topHead');

// changes color of text when mousover
heading.addEventListener('mouseover', function handleMouseOver() {
  heading.style.color = 'yellow';
});

// changes the color of text when mouseout
heading.addEventListener('mouseout', function handleMouseOut() {
  heading.style.color = 'red';
});

