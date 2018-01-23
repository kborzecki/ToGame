import { Component, Input, OnDestroy } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Building } from '../../core/models/buildings/Building';
import * as _ from 'lodash';

@Component({
  selector: 'to-building-list-element',
  templateUrl: './building-list-element.component.html',
  styleUrls: ['./building-list-element.component.css']
})
export class BuildingListElementComponent implements OnDestroy {

  @Input()
  building: Building;
  private selectedBuilding: Building
  private subscription;

  constructor(private gameService: GameService) {
    this.subscription = this.gameService.selectedBuilding$.subscribe((building) => this.selectedBuilding = building);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setSelectedBuilding(): void {
    if (!_.isEqual(this.building, this.selectedBuilding))
      this.gameService.setSelectedBuilding(this.building);
  }

  isActive(): boolean {
    return _.isEqual(this.building, this.selectedBuilding);
  }
}
