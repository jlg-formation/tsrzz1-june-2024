import { Board } from "./classes/Board";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board(config);
board.render();
