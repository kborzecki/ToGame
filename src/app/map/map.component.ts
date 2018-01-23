import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../core/services/game.service';
import { Building } from '../core/models/buildings/Building';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';
import { BuildingInfo } from '../core/models/building-creator/BuildingCreator';

@Component({
  selector: 'to-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  map: Building[][] = _.range(6).map(() => []);
  private subscription;

  constructor(public gameService: GameService, private notifications: NotificationsService) {}

  ngOnInit(): void {
    this.subscription = this.gameService.map$.subscribe(map => {
      for (let start = 0; start < 48; start += 8) {
        this.map[start / 8] = map.slice(start, 8 + start);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  build(row: number, col: number): void {
    let cell: number = row * 8 + col;
    let buildingInfo: [boolean, BuildingInfo] = this.gameService.build(cell);
    if (!buildingInfo[0]) {
      this.notifications.create(buildingInfo[1].title, buildingInfo[1].content, buildingInfo[1].type)
    }
  }
}
