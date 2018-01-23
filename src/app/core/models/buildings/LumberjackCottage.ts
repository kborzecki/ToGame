import { Building } from "./Building";

export const LUMBERJACK = 'Chatka drwala';

export class LumberjackCottage implements Building {
  public view = {
    displayName: 'ChD',
    color: 'lightpink',
    fontColor: 'black',
  };
  name: string = LUMBERJACK;
  income: number = 300;
  cost: number = 1500;
}
