import { Injectable } from '@angular/core';
import { State } from '../models/State';
import { Caretaker } from '../memento/Caretaker';
import { Memento } from '../memento/Memento';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Building, createBuilding } from '../models/buildings/Building';
import { QUARRY } from '../models/buildings/Quarry';
import { SAWMILL } from '../models/buildings/Sawmill';
import { LUMBERJACK } from '../models/buildings/LumberjackCottage';
import { GOLD_MINE } from '../models/buildings/GoldMine';
import { MINT } from '../models/buildings/Mint';
import { BuildingCreator, BuildingInfo } from '../models/building-creator/BuildingCreator';
import { MintCreator } from '../models/building-creator/MintCreator';
import { GoldMineCreator } from '../models/building-creator/GoldMineCreator';
import { LumberjackCottageCreator } from '../models/building-creator/LumberjackCottageCreator';
import { SawmillCreator } from '../models/building-creator/SawmillCreator';
import { QuarryCreator } from '../models/building-creator/QuarryCreator';

@Injectable()
export class GameService {
  private availableBuildings: Building[] = [
    createBuilding(QUARRY),
    createBuilding(LUMBERJACK),
    createBuilding(SAWMILL),
    createBuilding(GOLD_MINE),
    createBuilding(MINT),
  ];
  private _state: State = new State();
  selectedBuilding: Building;
  selectedBuilding$: BehaviorSubject<Building> = new BehaviorSubject(this.selectedBuilding);
  map$: BehaviorSubject<Building[]> = new BehaviorSubject(this._state.map);
  money$: BehaviorSubject<number> = new BehaviorSubject(this._state.money);
  income$: BehaviorSubject<number> = new BehaviorSubject(this._state.income);
  caretaker: Caretaker = new Caretaker();

  constructor() {}

  build(cell: number): [boolean, BuildingInfo] {
    if (this.selectedBuilding) {
      let canBuild: [boolean, BuildingInfo] = this.canBuild(cell);
      if (canBuild[0]) {
        this.saveState();
        this._state.build(cell, this.selectedBuilding);
        this._state.money -= this.selectedBuilding.cost;
        this.map$.next(this._state.map);
        this.income$.next(this._state.income);
      }
      return canBuild;
    }
    return [false, {
      type: 'error',
      title: 'Błąd',
      content: 'Najpierw wybierz budynek!'
    }]
  }

  saveState(): void {
    this.caretaker.addMemento(new Memento(this._state.getCopy()));
  }

  restoreState(): void {
    this._state = this.caretaker.getMemento().getState();
    this.map$.next(this._state.map);
    this.money$.next(this._state.money);
    this.income$.next(this._state.income);
  }

  addMoney(interval: number): void {
    this._state.addMoney(this._state.income / 10000 * interval);
    this.money$.next(this._state.money);
  }

  getAvailableBuildings(): Building[] {
    return this.availableBuildings;
  }

  setSelectedBuilding(building: Building): void {
    this.selectedBuilding = building;
    this.selectedBuilding$.next(this.selectedBuilding);
  }

  protected canBuild(cell: number): [boolean, BuildingInfo] {
    let buildingCreator: BuildingCreator = getBuildingCreator(this.selectedBuilding);
    return buildingCreator.canBuild(cell, this._state.map, this._state.money);
  }
}


function getBuildingCreator(building: Building): BuildingCreator {
  let newBuildingCreator: BuildingCreator;
  switch(building.name) {
    case QUARRY: {
      newBuildingCreator = new QuarryCreator(createBuilding(building.name));
      break;
    }
    case SAWMILL: {
      newBuildingCreator = new SawmillCreator(createBuilding(building.name));
      break;
    }
    case LUMBERJACK: {
      newBuildingCreator = new LumberjackCottageCreator(createBuilding(building.name));
      break;
    }
    case GOLD_MINE: {
      newBuildingCreator = new GoldMineCreator(createBuilding(building.name));
      break;
    }
    case MINT: {
      newBuildingCreator = new MintCreator(createBuilding(building.name));
      break;
    }
  }
  return newBuildingCreator;
}
