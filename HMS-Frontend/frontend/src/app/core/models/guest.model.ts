export interface Guest {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  idType?: string;
  idNumber?: string;
  notes?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
} 