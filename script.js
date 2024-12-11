//VARIABLES

let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbCodeOut = document.getElementById("rgb-code");
let rgbDisplay = document.getElementById("display");

redInEl.addEventListener("change", rgbPreview);
greenInEl.addEventListener("change", rgbPreview);
blueInEl.addEventListener("change", rgbPreview);

function rgbPreview() {
  //INNPUT
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //LiMIT
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  //PROCESS
  var rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";

  //OUTPUT
  rgbCodeOut.innerHTML = rgbString;
  rgbDisplay.style.background = rgbString;
}

let widthEl = document.getElementById("preWidth");
let heightEl = document.getElementById("preHeight");

widthEl.addEventListener("change", changeSize);
heightEl.addEventListener("change", changeSize);

function changeSize() {
  let width = +widthEl.value;
  let height = +heightEl.value;

  rgbDisplay.style.width = width + "px";
  rgbDisplay.style.height = height + "px";

  if (width < 50) {
    rgbDisplay.style.width = "50px";
    widthEl.value = "50";
  } else if (width > 400) {
    rgbDisplay.style.width = "400px";
    widthEl.value = "400";
  }

  if (height < 50) {
    rgbDisplay.style.height = "50px";
    heightEl.value = "50";
  } else if (height > 200) {
    rgbDisplay.style.height = "200px";
    heightEl.value = "200";
  }
}

document.getElementById("blackbtn").addEventListener("click", changeBlack);
document.getElementById("whitebtn").addEventListener("click", changeWhite);

function changeBlack() {
  redInEl.value = 0;
  greenInEl.value = 0;
  blueInEl.value = 0;

  rgbCodeOut.innerHTML = "rgb (0 ,0 ,0)";

  rgbDisplay.style.background = "black";
}

function changeWhite() {
  redInEl.value = 255;
  greenInEl.value = 255;
  blueInEl.value = 255;

  rgbCodeOut.innerHTML = "rgb (255 ,255 ,255)";

  rgbDisplay.style.background = "white";
}
