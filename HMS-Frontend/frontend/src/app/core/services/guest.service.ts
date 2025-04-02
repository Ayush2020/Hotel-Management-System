import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiUrl = `${environment.apiUrl}/guests`;

  constructor(private http: HttpClient) {}

  getGuests(page: number = 0, size: number = 10, search: string = ''): Observable<{guests: Guest[], total: number} | Guest[]> {
    // If no pagination parameters provided, return all guests
    if (page === undefined && size === undefined && search === '') {
      return this.http.get<Guest[]>(this.apiUrl);
    }
    
    // Otherwise return paginated results
    const params: any = { page: page.toString(), size: size.toString() };
    if (search) {
      params['search'] = search;
    }
    return this.http.get<{guests: Guest[], total: number}>(this.apiUrl, { params });
  }

  getGuestById(id: string): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}/${id}`);
  }

  createGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, guest);
  }

  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${guest.id}`, guest);
  }

  deleteGuest(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchGuests(query: string): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiUrl}/search`, { params: { query } });
  }
} 