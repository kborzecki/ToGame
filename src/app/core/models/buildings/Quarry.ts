import { Building } from "./Building";

export const QUARRY = 'Kamieniołom';

export class Quarry implements Building {
  public view = {
    displayName: 'K',
    color: 'silver',
    fontColor: 'black',
  };
  name: string = QUARRY;
  income: number = 200;
  cost: number = 500;
}
