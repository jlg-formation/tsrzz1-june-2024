import { Config } from "../interfaces/Config";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {}

  onUpdateConfig(callback: Callback) {
    this.callback = callback;
  }
}
