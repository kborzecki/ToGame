import { State } from '../models/State';

export class Memento {
  private state: State;

  constructor(_state: State) {
    this.state = _state;
  }

  getState(): State {
    return this.state;
  }

  restore(m: Memento): void {
    this.state = m.getState();
  }
}
