import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  HttpClient,
  HttpParams,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2DAULNLE.js";

// src/app/core/services/invoice.service.ts
var InvoiceService = class _InvoiceService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/invoices`;
  }
  getInvoices(page = 0, size = 10, search = "") {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getInvoiceById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createInvoice(invoice) {
    return this.http.post(this.apiUrl, invoice);
  }
  updateInvoice(invoice) {
    return this.http.put(`${this.apiUrl}/${invoice.id}`, invoice);
  }
  deleteInvoice(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getInvoicesByGuest(guestId) {
    return this.http.get(`${this.apiUrl}/guest/${guestId}`);
  }
  getUnpaidInvoices() {
    return this.http.get(`${this.apiUrl}/status/unpaid`);
  }
  getInvoicesByDateRange(startDate, endDate) {
    const params = new HttpParams().set("startDate", startDate).set("endDate", endDate);
    return this.http.get(`${this.apiUrl}/date-range`, { params });
  }
  generateInvoicePdf(id) {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, { responseType: "blob" });
  }
  sendInvoiceEmail(id) {
    return this.http.post(`${this.apiUrl}/${id}/send-email`, {});
  }
  static {
    this.\u0275fac = function InvoiceService_Factory(t) {
      return new (t || _InvoiceService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvoiceService, factory: _InvoiceService.\u0275fac, providedIn: "root" });
  }
};

export {
  InvoiceService
};
//# sourceMappingURL=chunk-T233WLZ4.js.map
