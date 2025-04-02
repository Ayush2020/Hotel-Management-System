import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) {}

  getRooms(page: number = 0, size: number = 10, search: string = ''): Observable<{rooms: Room[], total: number} | Room[]> {
    // If no pagination parameters provided, return all rooms
    if (page === undefined && size === undefined && search === '') {
      return this.http.get<Room[]>(this.apiUrl);
    }
    
    // Otherwise return paginated results
    const params: any = { page: page.toString(), size: size.toString() };
    if (search) {
      params['search'] = search;
    }
    return this.http.get<{rooms: Room[], total: number}>(this.apiUrl, { params });
  }

  getRoomById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${room.id}`, room);
  }

  deleteRoom(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAvailableRooms(checkInDate: string, checkOutDate: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/available`, { 
      params: { checkInDate, checkOutDate } 
    });
  }

  updateRoomStatus(id: string, status: string): Observable<Room> {
    return this.http.patch<Room>(`${this.apiUrl}/${id}/status`, { status });
  }
} 