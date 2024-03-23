import { NgModule } from '@angular/core';
import { MultiColorProgressbarComponent } from './multi-color-progressbar.component';
import { ColorProgressBarComponent } from './color-progress-bar/color-progress-bar.component';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiColorProgressbarComponent, ColorProgressBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MultiColorProgressbarComponent, ColorProgressBarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MultiColorProgressbarModule {}
