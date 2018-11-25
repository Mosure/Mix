import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'shots',
        children: [
          {
            path: '',
            component: ShotAblesComponent
          },
          {
            path: ':id',
            component: PresetDispenseComponent
          }
        ]
    },
    {
        path: 'mixers',
        children: [
          {
            path: '',
            component: MixersComponent
          },
          {
            path: ':id',
            component: ManualDispenseComponent
          }
        ]
    },
    {
        path: 'recipes',
        children: [
          {
            path: '',
            component: RecipesComponent
          },
          {
            path: 'database',
            component: RecipeDatabaseComponent
          },
          {
            path: ':id',
            component: RecipeComponent
          }
        ]
    },
    {
      path: 'status',
      component: LiquidStatusComponent
    },
    {
      path: 'liquids',
      component: LiquidDatabaseComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
