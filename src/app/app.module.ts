import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app.material';
import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './components/home/home.component';
import { ShotAblesComponent } from './components/home/shot-ables/shot-ables.component';
import { PresetDispenseComponent } from './components/dispense/preset-dispense/preset-dispense.component';
import { MixersComponent } from './components/home/mixers/mixers.component';
import { ManualDispenseComponent } from './components/dispense/manual-dispense/manual-dispense.component';
import { RecipesComponent } from './components/home/recipes/recipes.component';
import { RecipeComponent } from './components/dispense/recipe/recipe.component';
import { LiquidStatusComponent } from './components/liquid-status/liquid-status.component';
import { LiquidDatabaseComponent } from './components/liquid-database/liquid-database.component';
import { RecipeDatabaseComponent } from './components/recipe-database/recipe-database.component';
import { PumpSetupComponent } from './components/pump-setup/pump-setup.component';
import { SyrupsComponent } from './components/home/syrups/syrups.component';
import { DispenseComponent } from './components/dispense/dispense.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LockDialogComponent } from './components/nav-bar/lock-dialog/lock-dialog.component';
import { UnlockDialogComponent } from './components/nav-bar/unlock-dialog/unlock-dialog.component';

import { PumpQuickStatusComponent } from './components/shared/pump-quick-status.component.html/pump-quick-status.component';

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
    PumpSetupComponent,
    SyrupsComponent,
    DispenseComponent,

    NavBarComponent,
    LockDialogComponent,
    UnlockDialogComponent,

    PumpQuickStatusComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CacheService,
    ErrorHandlerService,
    LiquidService,
    LockService,
    PumpService,
    RecipeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LockDialogComponent,
    UnlockDialogComponent
  ]
})
export class AppModule { }
