import { Building } from "./Building";

export const GOLD_MINE = 'Kopalnia złota';

export class GoldMine implements Building {
  public view = {
    displayName: 'KZ',
    color: 'yellow',
    fontColor: 'black',
  };
  name: string = GOLD_MINE;
  income: number = 100;
  cost: number = 5000;
}
