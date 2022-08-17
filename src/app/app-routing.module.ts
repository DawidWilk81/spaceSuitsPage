import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'', component:HeroPageComponent},
  {path:'**' ,component:NotFoundComponent},
  {path:'catalog' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
