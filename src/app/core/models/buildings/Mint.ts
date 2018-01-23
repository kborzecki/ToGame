import { Building } from "./Building";

export const MINT = 'Mennica';

export class Mint implements Building {
  public view = {
    displayName: 'M',
    color: 'darkgoldenrod',
    fontColor: 'white',
  };
  name: string = MINT;
  income: number = 3000;
  cost: number = 10000;
}
