import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainCComponent } from './main-c/main-c.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'conductor',component:MainCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
