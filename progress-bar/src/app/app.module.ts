import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiProgressBarComponent } from './COMPONENTS/multi-progress-bar/multi-progress-bar.component';

@NgModule({
  declarations: [AppComponent, MultiProgressBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
