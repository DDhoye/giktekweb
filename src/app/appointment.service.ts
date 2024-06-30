import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'https://68.183.17.216:8080/api/appointments'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to cancel an appointment
  cancelAppointment(appointmentId: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/appointments/${appointmentId}/cancel`
    );
  }

  //Method for getting available time slots
  getAvailableTimeSlots(date: string): Observable<string[]> {
    return this.http.get<string[]>(
      `/api/appointments/available-time-slots?date=${date}`
    );
  }

  // Method to reschedule an appointment
  rescheduleAppointment(
    appointmentId: number,
    rescheduleData: any
  ): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/appointments/${appointmentId}/reschedule`,
      rescheduleData
    );
  }

  // Example method to book an appointment (assuming it exists)
  bookAppointment(bookingData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData);
  }
}
