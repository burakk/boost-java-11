const btnCreateShapesEl = document.getElementById("btn-create-shapes");

const stageEl = document.getElementById("stage");

let timerRef;

const colorPalette = ["pink", "aqua", "gray", "orange", "yellow"];

let counter = 0;

btnCreateShapesEl.addEventListener("click", handleCreateShapes);

function handleCreateShapes() {
  const stageElChildren = stageEl.children;

  for (let i = 0; i < stageElChildren.length; i++) {
    stageElChildren[i].remove();
  }

  if (timerRef) {
    clearInterval(timerRef);
  }
  timerRef = setInterval(createShape, 100);
}

/* function createShapes() {} */

function createShape() {
  const shapeEl = document.createElement("div");
  shapeEl.style.width = "50px";
  shapeEl.style.height = "50px";
  if (counter % 2 === 0) {
    shapeEl.style.borderRadius = "50%";
  }
  shapeEl.style.border = "1px solid white";

  shapeEl.style.backgroundColor = giveRandomColorFromPalette();

  stageEl.append(shapeEl);

  counter++;
}

function giveRandomColorFromPalette() {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}
