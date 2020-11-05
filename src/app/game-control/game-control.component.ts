import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  private _lastNumber: number = 0;
  private _interval;

  @Output()
  public newNumberFired: EventEmitter<number> = new EventEmitter<number>();
  public get isGameStarted(): boolean {
    return !!this._interval;
  } 

  public onStartGame() {
    this._interval = setInterval(() => {
      this._lastNumber++;
      this.newNumberFired.emit(this._lastNumber);
    }, 1000);
  }

  public onPauseGame() {
    clearInterval(this._interval);
    this._interval = null;
  }
}
