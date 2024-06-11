import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://your-api-endpoint.com/api/bookings'; // Replace with your actual API endpoint
  private availableUrl = 'YOUR_API_ENDPOINT_HERE'; // Replace with your actual API endpoint
  private reasonsUrl = 'https://your-api-endpoint.com/api/reasons'; // Replace with your actual API endpoint for reasons
  private itemUrl = 'https://your-api-endpoint.com/api/reasons';

  constructor(private http: HttpClient) {}

  submitBooking(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getReasons(): Observable<string[]> {
    return this.http.get<string[]>(this.reasonsUrl);
  }
  getAvailableSlots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.availableUrl}/availableSlots`);
  }
    getItems(): Observable<any[]> {
        return this.http.get<any[]>(`${this.itemUrl}/items`);
    }
    getBookings(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/bookings`);
    }
}
