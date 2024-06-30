import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';
import { ForgetComponent } from './forget/forget.component';
import { AppointmentService } from './appointment.service';

import { IgxCalendarModule } from 'igniteui-angular';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDialogModule } from 'igniteui-angular';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ExistingBookingsComponent } from './existing-bookings/existing-bookings.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BanksComponent } from './banks/banks.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    RegisterComponent,
    PageComponent,
    ForgetComponent,
    AppointmentFormComponent,
    ExistingBookingsComponent,
    BanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule, // Add CalendarModule here
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IgxCalendarModule,
    BrowserAnimationsModule,
    IgxDialogModule,
    DateInputsModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AppointmentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
