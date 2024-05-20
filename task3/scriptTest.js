const trafficLightEl = document.querySelector("#trafficLight");
trafficLightEl.addEventListener("click", makeGreen);

function makeGreen() {
  trafficLightEl.style.background = "green";
  trafficLightEl.removeEventListener("click", makeGreen);
  trafficLightEl.addEventListener("click", makeYellow);
  console.log("сделал зелёным - жду жёлтый");
}

function makeYellow() {
  trafficLightEl.style.background = "yellow";
  trafficLightEl.removeEventListener("click", makeYellow);
  trafficLightEl.addEventListener("click", makeRed);
  console.log("сделал жёлтым - жду Красный");
}

function makeRed() {
  trafficLightEl.style.background = "red";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
  console.log("сделал красным - жду зелёный");
}

// trafficLightEl.addEventListener("click", makeRed);
// trafficLightEl.addEventListener("click", makeYellow);
