import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  outerColorWeighage: { color: string; weighage: number }[] = [
    { color: '#D22B2B', weighage: 10 },
    { color: '#51DA67', weighage: 40 },
    { color: '#FFBF00', weighage: 50 },
  ];
}
