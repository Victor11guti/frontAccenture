// src/app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  AngularFireRemoteConfigModule,
  SETTINGS,
  DEFAULTS
} from '@angular/fire/compat/remote-config';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    // Firebase App + Firestore (compat)
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    // Remote Config (compat)
    AngularFireRemoteConfigModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Remote Config settings
    { provide: SETTINGS, useValue: { minimumFetchIntervalMillis: 3600 * 1000 } },

    // Remote Config defaults
    { provide: DEFAULTS, useValue: { showNewUI: false } }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
