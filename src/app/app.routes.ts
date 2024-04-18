import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { RegistroComponent } from './autenticacao/registro/registro.component';
import { LocationSelectionComponent } from './autenticacao/location-selection/location-selection.component';
import { UserInfoRegistrationComponent } from './autenticacao/user-info-registration/user-info-registration.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    { path: 'login', component: LoginComponent },
    { path:'registro', component: RegistroComponent},
    { path:'registro/UserInfoRegistration', component: UserInfoRegistrationComponent},
    {path: 'LocationSelection', component:  LocationSelectionComponent},

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }