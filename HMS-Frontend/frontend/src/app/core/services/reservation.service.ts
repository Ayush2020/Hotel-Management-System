import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) {}

  getReservations(page: number = 0, size: number = 10, search: string = ''): Observable<{reservations: Reservation[], total: number} | Reservation[]> {
    // If no pagination parameters provided, return all reservations
    if (page === undefined && size === undefined && search === '') {
      return this.http.get<Reservation[]>(this.apiUrl);
    }
    
    // Otherwise return paginated results
    const params: any = { page: page.toString(), size: size.toString() };
    if (search) {
      params['search'] = search;
    }
    return this.http.get<{reservations: Reservation[], total: number}>(this.apiUrl, { params });
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/${reservation.id}`, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  checkIn(id: string): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/${id}/check-in`, {});
  }

  checkOut(id: string): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/${id}/check-out`, {});
  }

  cancel(id: string, reason: string): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/${id}/cancel`, { reason });
  }

  getReservationsByGuest(guestId: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/guest/${guestId}`);
  }

  getReservationsByRoom(roomId: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/room/${roomId}`);
  }

  checkAvailability(checkInDate: string, checkOutDate: string, roomId?: string): Observable<boolean> {
    const params: any = { checkInDate, checkOutDate };
    if (roomId) {
      params.roomId = roomId;
    }
    return this.http.get<boolean>(`${this.apiUrl}/check-availability`, { params });
  }

  getCurrentReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/current`);
  }

  getUpcomingReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/upcoming`);
  }
} 