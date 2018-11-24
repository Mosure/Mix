import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'shots',
        component: ShotsComponent
    },
    {
        path: 'mixers',
        component: MixersComponent
    },
    {
        path: 'recipes',
        component: RecipesComponent
    },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
