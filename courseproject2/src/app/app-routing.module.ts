
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router'





const appRoutes: Routes = [
  
  {
    path: '', redirectTo: '/recipes', pathMatch : 'full'
  },
  {
    path : 'recipes',loadChildren: ()=>import('./recipes/recipes.module').then(m=>m.RecipeModule)
  }



]

// const appRoutes : Routes = [
//   {path : '',component: TestComponent}
// ]





@NgModule(
  {

    imports: [
      //RouterModule.forRoot(appRoutes, { useHash : true })
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
 }

)
export class AppRoutingModule {



}
