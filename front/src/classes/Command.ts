import { Config } from "../interfaces/Config";
import { getKeys, querySelector } from "../misc";

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
    const keys = getKeys(this.config);
    for (const key of keys) {
      querySelector(`div.command label.${key} .value`).innerHTML =
        this.config[key] + "";

      const elt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      elt.value = this.config[key] + "";
    }
  }
}
