import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ForgetComponent } from './forget/forget.component';
import { AuthService } from './auth.service';
 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BookAppointmentComponent,
    RegisterComponent,
    PageComponent,
    ForgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatePickerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,  // Add RouterModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }