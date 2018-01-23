import { Building } from "./Building";

export const SAWMILL = 'Tartak';

export class Sawmill implements Building {
  public view = {
    displayName: 'T',
    color: 'brown',
    fontColor: 'white',
  };
  name: string = SAWMILL;
  income: number = 500;
  cost: number = 3000;
}
