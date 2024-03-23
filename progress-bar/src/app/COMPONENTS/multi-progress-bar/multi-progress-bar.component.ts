import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-progress-bar',
  templateUrl: './multi-progress-bar.component.html',
  styleUrls: ['./multi-progress-bar.component.css'],
})
export class MultiProgressBarComponent {
  @Input() colorWeighage: { color: string; weighage: number }[] = [];

  calculateFlex(weighage: number): number {
    return weighage;
  }

  calculateZIndex(index: number): number {
    return this.colorWeighage.length - index;
  }
}
