import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service'; // Ensure the path is correct

@Component({
  selector: 'app-existing-bookings',
  templateUrl: './existing-bookings.component.html',
  styleUrls: ['./existing-bookings.component.css'],
})
export class ExistingBookingsComponent implements OnInit {
  bookings: any[] = [];
  rescheduleForm: FormGroup;
  selectedBooking: any;
  isRescheduleModalOpen: boolean = false;
  isCancelModalOpen: boolean = false;
  availableTimeSlots: string[] = [];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.rescheduleForm = this.fb.group({
      rescheduleDate: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      timeSlot: [''],
    });

    // Listen for changes in the department field
    this.rescheduleForm.get('department')?.valueChanges.subscribe(() => {
      // Reset the appointment date and available time slots when department changes
      this.rescheduleForm.get('appointmentDate')?.setValue(null);
      this.availableTimeSlots = [];
    });
  }

  ngOnInit(): void {
    this.loadBookings();
    this.rescheduleForm
      .get('rescheduleDate')
      ?.valueChanges.subscribe((date) => {
        if (date) {
          this.getAvailableTimeSlots(date);
        }
      });
  }

  loadBookings() {
    // Replace with real data fetching logic
    this.bookings = [
      {
        id: 1,
        department: 'Customer Service',
        date: new Date(),
        time: '10:00 AM',
      },
      { id: 2, department: 'Loans', date: new Date(), time: '11:00 AM' },
    ];
  }

  openRescheduleModal(booking: any) {
    this.selectedBooking = booking;
    this.isRescheduleModalOpen = true;
  }

  closeRescheduleModal() {
    this.isRescheduleModalOpen = false;
  }

  openCancelModal(booking: any) {
    this.selectedBooking = booking;
    this.isCancelModalOpen = true;
  }

  closeCancelModal() {
    this.isCancelModalOpen = false;
  }

  /**
   *  fetchAvailableTimeSlots(date: string) {
    if (date) {
      this.appointmentService.getAvailableTimeSlots(date).subscribe(
        (slots: string[]) => {
          this.availableTimeSlots = slots;
          this.rescheduleForm.get('rescheduleTime')?.reset();
        },
        (error: any) => {
          console.error('Error fetching time slots:', error);
          this.availableTimeSlots = [];
        }
      );
    }
  }
   */

  getAvailableTimeSlots(date: Date) {
    // Replace with real data fetching logic
    const slots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];
    this.availableTimeSlots = slots; // Update available time slots
  }

  onDateChange(event: any) {
    const date = event.value;
    if (date) {
      this.getAvailableTimeSlots(date);
    }
  }

  selectTimeSlot(timeSlot: string) {
    this.rescheduleForm.patchValue({ timeSlot });
    console.log('Selected time slot:', timeSlot);
  }

  onRescheduleSubmit() {
    if (this.rescheduleForm.valid) {
      const rescheduleData = this.rescheduleForm.value;
      this.appointmentService
        .rescheduleAppointment(this.selectedBooking.id, rescheduleData)
        .subscribe((response: any) => {
          console.log('Reschedule response:', response);
          this.closeRescheduleModal();
          this.loadBookings();
          // Notify visitor of the rescheduling
        });
    }
  }

  confirmCancelAppointment() {
    this.appointmentService
      .cancelAppointment(this.selectedBooking.id)
      .subscribe((response: any) => {
        console.log('Cancel response:', response);
        this.closeCancelModal();
        this.loadBookings();
        // Notify visitor of the cancellation
      });
  }
}
