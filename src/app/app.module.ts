import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyConlCKNtMiVjqODH5mzwlFF8o--cCfw7Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
