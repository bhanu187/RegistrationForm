import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
