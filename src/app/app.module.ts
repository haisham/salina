import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/shared/base/base.component';
import { InfoCardComponent } from './components/shared/info-card/info-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, BaseComponent, InfoCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [BaseComponent, InfoCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
