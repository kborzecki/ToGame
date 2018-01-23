import { Building } from '../buildings/Building';
import { EMPTY } from '../buildings/EmptyCell';

export class BuildingCreator {
  protected building: Building;

  constructor(building: Building) {
    this.building = building;
  }

  canBuild(cell: number, map: Building[], money: number): [boolean, BuildingInfo] {
    if (!this.isCellEmpty(cell, map)) {
      return [false, {
        type: 'error',
        title: 'Błąd',
        content: 'Pole nie jest puste!'
      }]
    }

    if (!this.hasMoney(money)) {
      return [false, {
        type: 'warn',
        title: 'Błąd',
        content: 'Masz za mało pieniędzy.'
      }]
    }

    return this.hasRequiredBuildings(map);
  }

  protected isCellEmpty(cell: number, map: Building[]): boolean {
    return map[cell].name == EMPTY;
  }

  protected hasMoney(money: number): boolean {
    return money >= this.building.cost;
  }

  protected hasRequiredBuildings(map: Building[]): [boolean, BuildingInfo] {
    return [true, {} as BuildingInfo];
  }
}

export interface BuildingInfo {
  type: string,
  title: string,
  content: string
}

