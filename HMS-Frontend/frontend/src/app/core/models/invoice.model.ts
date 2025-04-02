export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Invoice {
  id?: string;
  invoiceNumber: string;
  issueDate: string | Date;
  dueDate: string | Date;
  status: string;
  reservationId?: string;
  guestName: string;
  guestEmail?: string;
  guestPhone?: string;
  guestAddress?: string;
  roomNumber: string;
  checkInDate?: string | Date | null;
  checkOutDate?: string | Date | null;
  stayDuration?: number;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  amountPaid: number;
  balanceDue: number;
  notes?: string;
} 