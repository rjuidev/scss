import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylingComponent } from './styling/styling.component';
import { WebstylingComponent } from './webstyling/webstyling.component';

@NgModule({
  declarations: [
    AppComponent,
    StylingComponent,
    WebstylingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
