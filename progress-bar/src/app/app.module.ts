import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultiColorProgressbarModule } from 'multi-color-progressbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MultiColorProgressbarModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
