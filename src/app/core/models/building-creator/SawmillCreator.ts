import { BuildingCreator, BuildingInfo } from './BuildingCreator';
import { LUMBERJACK } from '../buildings/LumberjackCottage';
import { Building } from '../buildings/Building';

export class SawmillCreator extends BuildingCreator {
  protected hasRequiredBuildings(map: Building[]): [boolean, BuildingInfo] {
    if (!map.some(building => building.name == LUMBERJACK)) {
      return [false, {
        type: 'warn',
        title: 'Brak budynków',
        content: 'Najpierw wybuduj <strong>Chatkę drwala</strong>!'
      }]
    }
    return [true, {} as BuildingInfo];
  }
}
