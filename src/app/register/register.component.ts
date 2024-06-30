import { Component, OnInit } from '@angular/core';
// Adjust the path as per your project structure

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  bookings: any[] = [];
  filteredAppointments: any[] = [];
  statusFilter: string = '';
  monthFilter: string = ''; // Add this line

  constructor() {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookings = [
      {
        date: '2024-06-10',
        time: '10:00 AM',
        reason: 'Consultation',
        status: 'Pending',
      },
      {
        date: '2024-06-12',
        time: '02:00 PM',
        reason: 'Checkup',
        status: 'Confirmed',
      },
      {
        date: '2024-06-15',
        time: '11:30 AM',
        reason: 'Follow-up',
        status: 'Cancelled',
      },
      // Add more appointments as needed
    ];
    /*
    this.bookingService.getBookings().subscribe(
      (data: any[]) => {
        this.bookings = data;
      },
      error => {
        console.error('Error fetching bookings', error);
      }
    );*/
    this.filteredAppointments = this.bookings;
  }

  filterAppointments(): void {
    this.filteredAppointments = this.bookings.filter((appointment) => {
      const statusMatches =
        this.statusFilter === '' ||
        appointment.status
          .toLowerCase()
          .includes(this.statusFilter.toLowerCase());
      const monthMatches =
        this.monthFilter === '' ||
        appointment.date.split('-')[1] === this.monthFilter;
      return statusMatches && monthMatches;
    });
  }
}
