import "./style.css";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("oups");
}

for (let i = 0; i < 10; i++) {
  const circle = document.createElementNS(svgns, "circle");
  const x = 34;
  const y = 89;
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", "1");
  container.appendChild(circle);
}
