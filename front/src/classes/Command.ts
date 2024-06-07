import { Config } from "../interfaces/Config";
import { getKeys, querySelector } from "../misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  isPlaying = false;

  constructor(private config: Config) {
    this.render();
    this.setActions();
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

    querySelector("div.command div.buttons button.play").innerHTML = this
      .isPlaying
      ? "Pause"
      : "Play";
  }

  setActions() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const elt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      elt.addEventListener("input", () => {
        this.setConfig(key, +elt.value);
      });
    }

    querySelector("div.command div.buttons button.play").addEventListener(
      "click",
      () => {
        this.isPlaying = !this.isPlaying;
        this.render();
      }
    );
  }

  setConfig(key: keyof Config, value: number) {
    this.config[key] = value;
    this.render();
    this.callback(this.config);
  }
}
