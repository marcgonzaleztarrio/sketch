const DEFAULT_COLOR = "#333333";
const DEFAULT_SIZE = 16;
const DEFAULT_BACKGROUND_COLOR = "#ff0000";

let currentColor = DEFAULT_COLOR;

const container = document.getElementById("container");
let sizeInput = document.getElementById("sizeGrid");
let textoSize = document.getElementById("textoSizeGrid");
let colorInput = document.getElementById("color");
let textoColorGrid = document.getElementById("textoColorGrid");
let colorBG = document.getElementById("colorBG");
let textoColorBG = document.getElementById("textoColorBG");

function gridElement(size) {
  setTimeout(() => {
    size = size || DEFAULT_SIZE;

    textoColorGrid.innerHTML = colorInput.value;
    textoColorBG.innerHTML = colorBG.value;

    textoSize.innerHTML = `${sizeInput.value} X ${sizeInput.value}`;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      var div = document.createElement("div");
      div.classList.add("grid-item");
      div.style.removeProperty("background-color");
      div.innerHTML = "";
      container.appendChild(div);

      div.addEventListener("mousedown", changeColorGrid);
      div.addEventListener("mouseenter", changeColorGrid);
    }

    colorBG.addEventListener("change", (e) => {
      console.log("suuuuuususuususuu");
      container.querySelectorAll(".grid-item").forEach((el) => {
        el.style.background = colorBG.value;
        textoColorBG.innerHTML = colorBG.value;
      });
    });

    sizeInput.addEventListener("change", (e) => {
      container.querySelectorAll(".grid-item").forEach((el) => el.remove());
      gridElement(sizeInput.value);
    });
  }, 120);
}

console.log(container.style);

function changeColorGrid(e) {
  colorInput.addEventListener("change", (e) => {
    currentColor = colorInput.value;
    textoColorGrid.innerHTML = colorInput.value;
  });

  return (e.target.style.backgroundColor = currentColor);
}

document.body.onload = gridElement();
