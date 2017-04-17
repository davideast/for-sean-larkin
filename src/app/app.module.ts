import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAhUTkL1it20iE1xA1DjyLy924v9QuIYJE",
      authDomain: "angularfire-test-a80da.firebaseapp.com",
      databaseURL: "https://angularfire-test-a80da.firebaseio.com",
      projectId: "angularfire-test",
      storageBucket: "angularfire-test.appspot.com",
      messagingSenderId: "275928401147"
    }),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
