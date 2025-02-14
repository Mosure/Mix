import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ShotAblesComponent } from './components/home/shot-ables/shot-ables.component';
import { MixersComponent } from './components/home/mixers/mixers.component';
import { RecipesComponent } from './components/home/recipes/recipes.component';
import { LiquidStatusComponent } from './components/liquid-status/liquid-status.component';
import { PumpSetupComponent } from './components/pump-setup/pump-setup.component';
import { PumpComponent } from './components/pump-setup/pump/pump.component';
import { DispenseComponent } from './components/dispense/dispense.component';
import { SyrupsComponent } from './components/home/syrups/syrups.component';

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
            component: DispenseComponent
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
            component: DispenseComponent
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
            path: ':id',
            component: DispenseComponent
          }
        ]
    },
    {
      path: 'syrups',
      children: [
        {
          path: '',
          component: SyrupsComponent
        },
        {
          path: ':id',
          component: DispenseComponent
        }
      ]
    },
    {
      path: 'status',
      component: LiquidStatusComponent
    },
    {
      path: 'pumps',
      children: [
        {
          path: '',
          component: PumpSetupComponent
        },
        {
          path: ':id',
          component: PumpComponent
        }
      ]
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
