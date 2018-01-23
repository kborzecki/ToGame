import { BuildingCreator, BuildingInfo } from './BuildingCreator';
import { SAWMILL } from '../buildings/Sawmill';
import { Building } from '../buildings/Building';

export class GoldMineCreator extends BuildingCreator {
  protected hasRequiredBuildings(map: Building[]): [boolean, BuildingInfo] {
    if (!map.some(building => building.name == SAWMILL)) {
      return [false, {
        type: 'warn',
        title: 'Brak budynków',
        content: 'Najpierw wybuduj <strong>Tartak</strong>!'
      }]
    }
    return [true, {} as BuildingInfo];
  }
}
