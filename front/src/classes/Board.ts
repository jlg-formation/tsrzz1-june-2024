import { svgns } from "../constants";
import { Config } from "../interfaces/Config";
import { computeAngle, computePointOnCircle } from "../math";
import { querySelector, setAttribute } from "../misc";

export class Board {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  clean() {
    querySelector("g.samples").innerHTML = "";
    querySelector("g.lines").innerHTML = "";
  }

  render() {
    this.clean();

    const container = querySelector("g.samples");
    const { samples, multiplicationFactor } = this.config;

    for (let i = 0; i < samples; i++) {
      const circle = document.createElementNS(svgns, "circle");

      const angle = computeAngle(i, samples);
      const { x, y } = computePointOnCircle(angle);

      setAttribute(circle, "cx", x);
      setAttribute(circle, "cy", y);
      setAttribute(circle, "r", 1);
      container.appendChild(circle);
    }

    const lineContainer = querySelector("g.lines");

    for (let i = 0; i < samples; i++) {
      const line = document.createElementNS(svgns, "line");

      const angle1 = computeAngle(i, samples);
      const angle2 = computeAngle(i * multiplicationFactor, samples);

      const { x: x1, y: y1 } = computePointOnCircle(angle1);
      const { x: x2, y: y2 } = computePointOnCircle(angle2);

      setAttribute(line, "x1", x1);
      setAttribute(line, "y1", y1);
      setAttribute(line, "x2", x2);
      setAttribute(line, "y2", y2);
      lineContainer.appendChild(line);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
