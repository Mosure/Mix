import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app.material';
import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './components/home/home.component';
import { ShotAblesComponent } from './components/home/shot-ables/shot-ables.component';
import { PresetDispenseComponent } from './components/home/shot-ables/preset-dispense/preset-dispense.component';
import { MixersComponent } from './components/home/mixers/mixers.component';
import { ManualDispenseComponent } from './components/home/mixers/manual-dispense/manual-dispense.component';
import { RecipesComponent } from './components/home/recipes/recipes.component';
import { RecipeComponent } from './components/home/recipes/recipe/recipe.component';
import { LiquidStatusComponent } from './components/liquid-status/liquid-status.component';
import { LiquidDatabaseComponent } from './components/liquid-database/liquid-database.component';
import { RecipeDatabaseComponent } from './components/recipe-database/recipe-database.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import {
  CacheService,
  ErrorHandlerService,
  LiquidService,
  LockService,
  PumpService,
  RecipeService
} from './services';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ShotAblesComponent,
    PresetDispenseComponent,
    MixersComponent,
    ManualDispenseComponent,
    RecipesComponent,
    RecipeComponent,
    LiquidStatusComponent,
    LiquidDatabaseComponent,
    RecipeDatabaseComponent,

    NavBarComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CacheService,
    ErrorHandlerService,
    LiquidService,
    LockService,
    PumpService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
