import { svgns } from "./constants";
import { computeAngle, computePointOnCircle } from "./math";
import { querySelector } from "./misc";
import "./style.css";

const samples = 10;
const multiplicationFactor = 2;

const container = querySelector("g.samples");

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = computeAngle(i, samples);
  const { x, y } = computePointOnCircle(angle);

  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", "1");
  container.appendChild(circle);
}

const lineContainer = querySelector("g.lines");

for (let i = 0; i < samples; i++) {
  const line = document.createElementNS(svgns, "line");

  const angle1 = computeAngle(i, samples);
  const angle2 = computeAngle(i * multiplicationFactor, samples);

  const { x: x1, y: y1 } = computePointOnCircle(angle1);
  const { x: x2, y: y2 } = computePointOnCircle(angle2);

  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y2", y2 + "");
  lineContainer.appendChild(line);
}
