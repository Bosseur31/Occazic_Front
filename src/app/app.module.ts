import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EstimateComponent } from './estimate/estimate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialElevationDirective} from "./card-category-elevation.directive";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

import { ServiceWorkerModule } from '@angular/service-worker';
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    EstimateComponent,
    NavBarComponent,
    MaterialElevationDirective,
  ],
    imports: [
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
      }),
      BrowserModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatStepperModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatToolbarModule,
      MatIconModule,
      HttpClientModule,
      FormsModule,
      MatGridListModule,
      MatCardModule,
      FlexLayoutModule,
      MatAutocompleteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
