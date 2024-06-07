import { Board } from "./classes/Board";
import { Command } from "./classes/Command";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = {
  samples: 100,
  multiplicationFactor: 2,
};

const board = new Board(config);
board.render();

const command = new Command(config);
command.onUpdateConfig((newConfig) => {
  board.setConfig(newConfig);
  board.render();
});
