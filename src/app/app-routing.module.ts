import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { FullComponent } from './layouts/full/full.component';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signUp",component:SignupComponent},
  {path:"profile",component:ProfileComponent},


  {
    path:"",
    component:FullComponent,
    children: [
      {path:"table", component:ProductComponent},
      {path:"home", component:DashboardComponent},
      {path:"profile",component:ProfileComponent}
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
