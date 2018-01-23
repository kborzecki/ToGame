import { Building } from "./Building";

export const EMPTY = 'empty';

export class EmptyCell implements Building {
    public view = {
      displayName: '',
      color: 'lightgreen',
      fontColor: '',
    };
    name: string = EMPTY;
    income: number = 0;
    cost: number = 0;
}
