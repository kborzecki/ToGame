import { Memento } from './Memento';

export class Caretaker {
  private mementos: Memento[] = [];

  addMemento(m: Memento): void {
    this.mementos.push(m);
  }

  getMemento(): Memento {
    return this.mementos.pop();
  }

  getMementosCount(): number {
    return this.mementos.length;
  }
}
