import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent implements OnInit {
  bookingForm: FormGroup;
  departments = ['Customer Service', 'Loans', 'Accounts', 'Investments'];
  availableTimeSlots: string[] = [];
  bank: string | null = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {
    this.bookingForm = this.fb.group({
      department: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      timeSlot: [''],
    });

    // Listen for changes in the department field
    this.bookingForm.get('department')?.valueChanges.subscribe(() => {
      // Reset the appointment date and available time slots when department changes
      this.bookingForm.get('appointmentDate')?.setValue(null);
      this.availableTimeSlots = [];
    });
  }

  ngOnInit(): void {
    this.bank = this.route.snapshot.paramMap.get('bank');
  }

  onDateChange(event: any) {
    const selectedDate = event.value;
    // Fetch available time slots for the selected date
    this.availableTimeSlots = this.getAvailableTimeSlots(selectedDate);
  }

  getAvailableTimeSlots(date: Date): string[] {
    // Replace with real data fetching logic
    return ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];
  }

  selectTimeSlot(timeSlot: string) {
    this.bookingForm.patchValue({ timeSlot });
    console.log('Selected time slot:', timeSlot);
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const institutionId = localStorage.getItem('institutionId');
      const visitorId = localStorage.getItem('visitorId');

      if (institutionId && visitorId) {
        const bookingData = {
          ...this.bookingForm.value,
          institutionId: institutionId,
          visitorId: visitorId,
        };

        console.log('Booking data:', bookingData);

        this.appointmentService.bookAppointment(bookingData).subscribe(
          (response) => {
            console.log('Booking response:', response);
            // Display confirmation message
            alert(
              `Appointment booked successfully!\n\nDetails:\nDate: ${response.date}\nTime: ${response.time}\nDepartment: ${response.department}\nVisitor: ${response.name}`
            );
            this.bookingForm.reset();
          },
          (error) => {
            console.error('Booking error:', error);
            // Handle error
          }
        );
      } else {
        alert('Institution ID or Visitor ID is missing.');
      }
    }
  }
}
