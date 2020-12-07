import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StorageModule} from '@ngx-pwa/local-storage';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyBbot7j3dPF5hbfc2o5_qmjXS476oLlph8',
  authDomain: 'banded-hexagon-275008.firebaseapp.com',
  databaseURL: 'https://banded-hexagon-275008.firebaseio.com',
  projectId: 'banded-hexagon-275008',
  storageBucket: 'banded-hexagon-275008.appspot.com',
  messagingSenderId: '1044881337458',
  appId: '1:1044881337458:web:3cc3f6d2101bce1a6fa6eb',
  measurementId: 'G-P6HRZWHB9V'

  // apiKey: 'AIzaSyCZ6Bhz-uPjI-WAdai4YJfBQLpWfwAI4B0',
  // authDomain: 'qlmamnon.firebaseapp.com',
  // databaseURL: 'https://qlmamnon.firebaseio.com',
  // projectId: 'qlmamnon',
  // storageBucket: 'qlmamnon.appspot.com',
  // messagingSenderId: '135416329510',
  // appId: '1:135416329510:web:8342a0a38f7d70ade7bde7',
  // measurementId: 'G-E09R69TJC1'
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    StorageModule.forRoot({
      IDBNoWrap: true
    }),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
