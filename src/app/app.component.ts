import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Numbers: number[] = [];

  public onNewNumberFired(number: number) {
      return this.Numbers.push(number);
  }

  public isEvenNumber(number: number): boolean {
    return  number % 2 == 0;
  }

}
