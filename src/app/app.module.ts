import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/shared/base/base.component';
import { InfoCardComponent } from './components/shared/info-card/info-card.component';
import { StudyDetailsComponent } from './components/shared/study-details/study-details.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    InfoCardComponent,
    StudyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgChartsModule,
  ],
  exports: [BaseComponent, InfoCardComponent, StudyDetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
