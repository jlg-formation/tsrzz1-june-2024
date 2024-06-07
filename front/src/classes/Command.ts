import { Config } from "../interfaces/Config";
import { querySelector } from "../misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {
    this.render();
  }

  onUpdateConfig(callback: Callback) {
    this.callback = callback;
  }

  render() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      querySelector(`div.command label.${key} .value`).innerHTML =
        this.config[key] + "";
    }
  }
}
