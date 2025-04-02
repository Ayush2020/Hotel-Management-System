export interface Reservation {
  id?: string;
  guestId: string;
  guestName: string;
  roomId: string;
  roomNumber: string;
  roomType?: string;
  roomRate: number;
  checkInDate: string | Date;
  checkOutDate: string | Date;
  status: 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'NO_SHOW';
  adults: number;
  children: number;
  totalGuests: number;
  stayDuration: number;
  totalAmount: number;
  paymentStatus: 'PENDING' | 'PARTIALLY_PAID' | 'PAID';
  specialRequests?: string;
  source?: string;
  notes?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
} 