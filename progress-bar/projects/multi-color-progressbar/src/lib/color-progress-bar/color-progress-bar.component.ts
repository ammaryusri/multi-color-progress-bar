import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-color-progress-bar',
  templateUrl: './color-progress-bar.component.html',
  styleUrls: ['./color-progress-bar.component.css'],
})
export class ColorProgressBarComponent {
  @Input() colorWeighage: { color: string; weighage: number }[] = [];

  calculateFlex(weighage: number): number {
    return weighage;
  }

  calculateZIndex(index: number): number {
    return this.colorWeighage.length - index;
  }
}
