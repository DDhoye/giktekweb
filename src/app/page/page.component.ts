import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
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

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      company: [''],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchAvailableSlots();
    this.loadReasons();
    this.getItem() ;
  }
  getItem() { 
    this.bookingService.getItems().subscribe()
  }

  fetchAvailableSlots() {
    this.bookingService.getAvailableSlots().subscribe(
      data => {
        this.availableSlots = data;
        this.updateDisplayedSlots();
      },
      error => {
        console.error('Error fetching available slots', error);
      }
    );
  }

  loadReasons() {
    this.bookingService.getReasons().subscribe(
      (data: string[]) => {
        this.reasons = data;
      },
      error => {
        console.error('Error fetching reasons', error);
      }
    );
  }

  updateDisplayedSlots() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.displayedSlots = this.availableSlots.slice(startIndex, endIndex);
  }

  onRowsPerPageChange(event: any) {
    this.rowsPerPage = event.target.value;
    this.currentPage = 1; // Reset to first page
    this.updateDisplayedSlots();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedSlots();
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.availableSlots.length / this.rowsPerPage)).fill(0).map((x, i) => i + 1);
  }

  onCancel() {
    this.bookingForm.reset();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingService.submitBooking(this.bookingForm.value).subscribe(
        response => {
          console.log('Booking submitted successfully', response);
          alert('Booking submitted successfully');
        },
        error => {
          console.error('Error submitting booking', error);
          alert('Error submitting booking');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
