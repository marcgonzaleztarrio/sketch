const DEFAULT_COLOR = "#333333";

let currentColor = DEFAULT_COLOR;

const container = document.getElementById("container");
let sizeInput = document.getElementById("sizeGrid");

size = 16;

function gridElement(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  console.log("loko2 function ");

  for (let i = 0; i < size * size; i++) {
    var div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = "";
    div.addEventListener("mousedown", changeColor);
    div.addEventListener("mouseover", changeColor);
    container.appendChild(div);
  }
}

function changeColor(e) {
  return (e.target.style.backgroundColor = currentColor);
}

sizeInput.addEventListener("change", (e) => {
  gridElement;
});

document.body.onload = gridElement();
