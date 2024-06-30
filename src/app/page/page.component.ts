import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  bookingForm: FormGroup;
  availableSlots: any[] = [];
  displayedSlots: any[] = [];
  rowsPerPage: number = 5; // Default rows per page
  currentPage: number = 1;
  reasons: string[] = [];
  email: string = '';
  userName: string = '';

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      company: [''],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
