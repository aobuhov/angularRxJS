import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  undatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.undatedAt = Date.now();
    this.counter++;
  }
  decrease(): void {
    this.undatedAt = Date.now();
    this.counter--;
  }

  clear(): void {
    this.undatedAt = Date.now();
    this.counter = 0;
  }


}
