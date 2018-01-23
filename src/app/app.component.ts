import { Component, OnDestroy } from '@angular/core';
import { GameService } from './core/services/game.service';
import { Observable } from 'rxjs/Rx';
const INCOME_PERIOD = 50;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  money: number = 0;
  income: number = 0;
  notificationOptions = {
    position: ['top', 'center'],
    timeOut: 2500,
    showProgressBar: true,
    pauseOnHover: false,
    maxStack: 1,
    animate: 'scale'
  }
  private subscription;
  private subscription2;
  private subscription3;



  constructor(public gameService: GameService) {
    this.subscription = this.gameService.money$.subscribe(money => this.money = money);
    this.subscription2 = Observable.interval(INCOME_PERIOD).subscribe(() => this.gameService.addMoney(INCOME_PERIOD))
    this.subscription3 = this.gameService.income$.subscribe(income => this.income = income);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  restoreMemento(): void {
    this.gameService.restoreState();
  }
}


