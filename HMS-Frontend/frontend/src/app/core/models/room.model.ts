export interface Room {
  id?: string;
  roomNumber: string;
  type: string;
  price: number;
  capacity: number;
  status: 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';
  amenities: string[];
  description?: string;
  floor?: number;
  size?: number;
  bedType?: string;
  image?: string;
} 