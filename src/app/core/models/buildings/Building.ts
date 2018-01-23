import { EMPTY, EmptyCell } from './EmptyCell';
import { Quarry, QUARRY } from './Quarry';
import { SAWMILL, Sawmill } from './Sawmill';
import { LUMBERJACK, LumberjackCottage } from './LumberjackCottage';
import { GOLD_MINE, GoldMine } from './GoldMine';
import { Mint, MINT } from './Mint';

export class Building {
  public view: BuildingView;
  income: number;
  name: string;
  cost: number;
}

interface BuildingView {
  displayName: string,
  color: string,
  fontColor: string,
}

export function createBuilding(building: string): Building {
  let newBuilding: Building;
  switch(building) {
    case EMPTY: {
      newBuilding = new EmptyCell();
      break;
    }
    case QUARRY: {
      newBuilding = new Quarry();
      break;
    }
    case SAWMILL: {
      newBuilding = new Sawmill();
      break;
    }
    case LUMBERJACK: {
      newBuilding = new LumberjackCottage();
      break;
    }
    case GOLD_MINE: {
      newBuilding = new GoldMine();
      break;
    }
    case MINT: {
      newBuilding = new Mint();
      break;
    }
  }
  return newBuilding;
}
