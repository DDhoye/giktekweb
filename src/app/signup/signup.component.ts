import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // import AuthService

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  errorMessage = ''; // Declare the errorMessage property here

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  signup() {
    this.errorMessage = ''; // Reset the errorMessage property
  
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const confirmPassword = this.signupForm.value.confirmPassword;
  
    if (!email || !password) {
      this.errorMessage = 'Email and password must be provided.';
      return;
    }
  
    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
  
    this.authService.signup(email, password).subscribe(
      isSuccessful => {
        if (isSuccessful) {
          console.log('Signup successful');
          this.router.navigate(['/page']);  // navigate to login component
        } else {
          this.errorMessage = 'Signup failed.';
        }
      },
      error => {
        console.error('Signup error:', error);
        this.errorMessage = 'An error occurred during signup.';
      }
    );
  }
}