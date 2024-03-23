import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  outerColorWeighage: { color: string; weighage: number }[] = [
    { color: '#E26969', weighage: 10 },
    { color: '#51DA67', weighage: 40 },
    { color: '#DAB451', weighage: 50 },
  ];
}
