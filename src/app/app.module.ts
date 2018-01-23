import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameService } from './core/services/game.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingListElementComponent } from './building-list/building-list-element/building-list-element.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BuildingListComponent,
    BuildingListElementComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [ GameService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
