import { Building, createBuilding } from './buildings/Building';
import { EMPTY } from './buildings/EmptyCell';
import * as _ from 'lodash';

export class State {
  money: number;
  income: number;
  map: Building[];

  constructor(money: number = 2000, income: number = 0, map: Building[] = _.range(48).map(() => createBuilding(EMPTY))) {
    this.money = money;
    this.income = income;
    this.map = map;
  };

  getCopy(): State {
    return new State(this.money, this.income, [...this.map])
  }

  build(cell: number, building: Building): void {
    this.map[cell] = building;
    this.income += building.income;
  }

  addMoney(amount: number): void {
    this.money += amount;
  }
}
