import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_Routes } from './app.routes';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(APP_Routes)],
  declarations: [AppComponent,LeftMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
