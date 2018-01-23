import { BuildingCreator, BuildingInfo } from './BuildingCreator';
import { GOLD_MINE } from '../buildings/GoldMine';
import { Building } from '../buildings/Building';

export class MintCreator extends BuildingCreator {
  protected hasRequiredBuildings(map: Building[]): [boolean, BuildingInfo] {
    if (!map.some(building => building.name == GOLD_MINE)) {
      return [false, {
        type: 'warn',
        title: 'Brak budynków',
        content: 'Najpierw wybuduj <strong>Kopalnię złota</strong>!'
      }]
    }
    return [true, {} as BuildingInfo];
  }
}
