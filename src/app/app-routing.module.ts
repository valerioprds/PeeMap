import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { UserRegistrationComponent } from './account/user-registration/user-registration.component';
import { EmailVerificationComponent } from './account/email-verification/email-verification.component';
import { RecoverPasswordComponent } from './account/recover-password/recover-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddLocationComponent } from './components/add-location/add-location.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
