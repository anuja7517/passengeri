import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengercardComponent } from './passengercard/passengercard.component';
import { PassengerlistComponent } from './passengerlist/passengerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengercardComponent,
    PassengerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
