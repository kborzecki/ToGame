import { Component } from '@angular/core';
import { GameService } from '../core/services/game.service';

@Component({
  selector: 'to-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent {
  constructor(public gameService: GameService) {}
}
