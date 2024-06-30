import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { PageComponent } from './page/page.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ExistingBookingsComponent } from './existing-bookings/existing-bookings.component';
import { BanksComponent } from './banks/banks.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page', component: PageComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'appointment/:bank', component: AppointmentFormComponent },
  { path: 'bookings', component: ExistingBookingsComponent },

  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
