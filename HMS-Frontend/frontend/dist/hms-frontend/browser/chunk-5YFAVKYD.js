import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-CER2RQPR.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-PE666PWF.js";
import {
  InvoiceService
} from "./chunk-T233WLZ4.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MZ5CGW3Y.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-X5VU3L5S.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WL3U4NOB.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-YYXQY53Y.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-PZ47AC3Q.js";
import "./chunk-W6NUDNO3.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-ZKLSL4BO.js";
import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  map,
  of,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/core/services/guest.service.ts
var GuestService = class _GuestService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/guests`;
  }
  getGuests(page = 0, size = 10, search = "") {
    if (page === void 0 && size === void 0 && search === "") {
      return this.http.get(this.apiUrl);
    }
    const params = { page: page.toString(), size: size.toString() };
    if (search) {
      params["search"] = search;
    }
    return this.http.get(this.apiUrl, { params });
  }
  getGuestById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createGuest(guest) {
    return this.http.post(this.apiUrl, guest);
  }
  updateGuest(guest) {
    return this.http.put(`${this.apiUrl}/${guest.id}`, guest);
  }
  deleteGuest(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  searchGuests(query) {
    return this.http.get(`${this.apiUrl}/search`, { params: { query } });
  }
  static {
    this.\u0275fac = function GuestService_Factory(t) {
      return new (t || _GuestService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GuestService, factory: _GuestService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/room.service.ts
var RoomService = class _RoomService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/rooms`;
  }
  getRooms(page = 0, size = 10, search = "") {
    if (page === void 0 && size === void 0 && search === "") {
      return this.http.get(this.apiUrl);
    }
    const params = { page: page.toString(), size: size.toString() };
    if (search) {
      params["search"] = search;
    }
    return this.http.get(this.apiUrl, { params });
  }
  getRoomById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createRoom(room) {
    return this.http.post(this.apiUrl, room);
  }
  updateRoom(room) {
    return this.http.put(`${this.apiUrl}/${room.id}`, room);
  }
  deleteRoom(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getAvailableRooms(checkInDate, checkOutDate) {
    return this.http.get(`${this.apiUrl}/available`, {
      params: { checkInDate, checkOutDate }
    });
  }
  updateRoomStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }
  static {
    this.\u0275fac = function RoomService_Factory(t) {
      return new (t || _RoomService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomService, factory: _RoomService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/reservation.service.ts
var ReservationService = class _ReservationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/reservations`;
  }
  getReservations(page = 0, size = 10, search = "") {
    if (page === void 0 && size === void 0 && search === "") {
      return this.http.get(this.apiUrl);
    }
    const params = { page: page.toString(), size: size.toString() };
    if (search) {
      params["search"] = search;
    }
    return this.http.get(this.apiUrl, { params });
  }
  getReservationById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createReservation(reservation) {
    return this.http.post(this.apiUrl, reservation);
  }
  updateReservation(reservation) {
    return this.http.put(`${this.apiUrl}/${reservation.id}`, reservation);
  }
  deleteReservation(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  checkIn(id) {
    return this.http.patch(`${this.apiUrl}/${id}/check-in`, {});
  }
  checkOut(id) {
    return this.http.patch(`${this.apiUrl}/${id}/check-out`, {});
  }
  cancel(id, reason) {
    return this.http.patch(`${this.apiUrl}/${id}/cancel`, { reason });
  }
  getReservationsByGuest(guestId) {
    return this.http.get(`${this.apiUrl}/guest/${guestId}`);
  }
  getReservationsByRoom(roomId) {
    return this.http.get(`${this.apiUrl}/room/${roomId}`);
  }
  checkAvailability(checkInDate, checkOutDate, roomId) {
    const params = { checkInDate, checkOutDate };
    if (roomId) {
      params.roomId = roomId;
    }
    return this.http.get(`${this.apiUrl}/check-availability`, { params });
  }
  getCurrentReservations() {
    return this.http.get(`${this.apiUrl}/current`);
  }
  getUpcomingReservations() {
    return this.http.get(`${this.apiUrl}/upcoming`);
  }
  static {
    this.\u0275fac = function ReservationService_Factory(t) {
      return new (t || _ReservationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationService, factory: _ReservationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/invoices/invoice-form/invoice-form.component.ts
function InvoiceFormComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Invoice number is required ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Issue date is required ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Due date is required ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Status is required ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r2 = ctx.$implicit;
    \u0275\u0275property("value", reservation_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", reservation_r2.id, " - ", reservation_r2.guestName, " (", \u0275\u0275pipeBind1(2, 5, reservation_r2.checkInDate), " to ", \u0275\u0275pipeBind1(3, 7, reservation_r2.checkOutDate), ") ");
  }
}
function InvoiceFormComponent_mat_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r3 = ctx.$implicit;
    \u0275\u0275property("value", guest_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", guest_r3.firstName, " ", guest_r3.lastName, " ");
  }
}
function InvoiceFormComponent_mat_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275property("value", room_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", room_r4.roomNumber, " - ", room_r4.type, " ");
  }
}
function InvoiceFormComponent_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_td_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53)(1, "mat-form-field", 12);
    \u0275\u0275element(2, "input", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const itemControl_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r5.getFormControl(itemControl_r5, "description"));
  }
}
function InvoiceFormComponent_th_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Quantity");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_td_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 53)(1, "mat-form-field", 12)(2, "input", 55);
    \u0275\u0275listener("input", function InvoiceFormComponent_td_101_Template_input_input_2_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.updateItemAmount(i_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const itemControl_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r5.getFormControl(itemControl_r9, "quantity"));
  }
}
function InvoiceFormComponent_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Unit Price");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_td_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 53)(1, "mat-form-field", 12)(2, "input", 56);
    \u0275\u0275listener("input", function InvoiceFormComponent_td_104_Template_input_input_2_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.updateItemAmount(i_r11));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const itemControl_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r5.getFormControl(itemControl_r12, "unitPrice"));
  }
}
function InvoiceFormComponent_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_td_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53)(1, "mat-form-field", 12);
    \u0275\u0275element(2, "input", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const itemControl_r13 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r5.getFormControl(itemControl_r13, "amount"));
  }
}
function InvoiceFormComponent_th_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function InvoiceFormComponent_td_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 53)(1, "button", 58);
    \u0275\u0275listener("click", function InvoiceFormComponent_td_110_Template_button_click_1_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeItem(i_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function InvoiceFormComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 59);
  }
}
function InvoiceFormComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 60);
  }
}
function InvoiceFormComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-form-field", 12)(2, "mat-label");
    \u0275\u0275text(3, "Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 61);
    \u0275\u0275listener("input", function InvoiceFormComponent_div_133_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.updateBalanceDue());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 12)(6, "mat-label");
    \u0275\u0275text(7, "Balance Due");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 62);
    \u0275\u0275elementEnd()();
  }
}
var InvoiceFormComponent = class _InvoiceFormComponent {
  constructor(fb, route, router, invoiceService, guestService, roomService, reservationService, snackBar) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.invoiceService = invoiceService;
    this.guestService = guestService;
    this.roomService = roomService;
    this.reservationService = reservationService;
    this.snackBar = snackBar;
    this.isEditMode = false;
    this.invoiceId = null;
    this.reservations = [];
    this.guests = [];
    this.rooms = [];
    this.filteredGuests = of([]);
    this.filteredRooms = of([]);
    this.displayedColumns = ["description", "quantity", "unitPrice", "amount", "actions"];
    this.invoiceForm = this.createForm();
  }
  ngOnInit() {
    this.loadData();
    this.route.paramMap.subscribe((params) => {
      this.invoiceId = params.get("id");
      if (this.invoiceId) {
        this.isEditMode = true;
        this.loadInvoice(this.invoiceId);
      } else {
        this.addItem();
      }
    });
    this.setupAutocomplete();
  }
  createForm() {
    return this.fb.group({
      invoiceNumber: ["", Validators.required],
      issueDate: [/* @__PURE__ */ new Date(), Validators.required],
      dueDate: [new Date(Date.now() + 14 * 24 * 60 * 60 * 1e3), Validators.required],
      status: ["Unpaid", Validators.required],
      reservationId: [""],
      guestName: ["", Validators.required],
      guestEmail: [""],
      guestPhone: [""],
      guestAddress: [""],
      roomNumber: ["", Validators.required],
      checkInDate: [null],
      checkOutDate: [null],
      stayDuration: [0],
      items: this.fb.array([]),
      subtotal: [0],
      taxRate: [10],
      taxAmount: [0],
      totalAmount: [0],
      amountPaid: [0],
      balanceDue: [0],
      notes: [""]
    });
  }
  get itemsFormArray() {
    return this.invoiceForm.get("items");
  }
  addItem() {
    const itemGroup = this.fb.group({
      description: ["", Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      amount: [0]
    });
    this.itemsFormArray.push(itemGroup);
    this.updateTotals();
  }
  removeItem(index) {
    this.itemsFormArray.removeAt(index);
    this.updateTotals();
  }
  getFormControl(control, name) {
    return control.get(name);
  }
  updateItemAmount(index) {
    const items = this.itemsFormArray.controls;
    const item = items[index];
    const quantity = item.get("quantity")?.value || 0;
    const unitPrice = item.get("unitPrice")?.value || 0;
    const amount = quantity * unitPrice;
    item.get("amount")?.setValue(amount, { emitEvent: false });
    this.updateTotals();
  }
  updateTotals() {
    let subtotal = 0;
    for (const control of this.itemsFormArray.controls) {
      subtotal += control.get("amount")?.value || 0;
    }
    const taxRate = this.invoiceForm.get("taxRate")?.value || 0;
    const taxAmount = subtotal * (taxRate / 100);
    const totalAmount = subtotal + taxAmount;
    this.invoiceForm.patchValue({
      subtotal,
      taxAmount,
      totalAmount
    });
    this.updateBalanceDue();
  }
  updateBalanceDue() {
    const totalAmount = this.invoiceForm.get("totalAmount")?.value || 0;
    const amountPaid = this.invoiceForm.get("amountPaid")?.value || 0;
    const balanceDue = Math.max(0, totalAmount - amountPaid);
    this.invoiceForm.patchValue({
      balanceDue
    });
    if (amountPaid <= 0) {
      this.invoiceForm.get("status")?.setValue("Unpaid");
    } else if (amountPaid >= totalAmount) {
      this.invoiceForm.get("status")?.setValue("Paid");
    } else {
      this.invoiceForm.get("status")?.setValue("Partially Paid");
    }
  }
  loadData() {
    this.reservationService.getReservations(void 0, void 0, "").subscribe((result) => {
      this.reservations = Array.isArray(result) ? result : result.reservations;
    });
    this.guestService.getGuests(void 0, void 0, "").subscribe((result) => {
      this.guests = Array.isArray(result) ? result : result.guests;
    });
    this.roomService.getRooms(void 0, void 0, "").subscribe((result) => {
      this.rooms = Array.isArray(result) ? result : result.rooms;
    });
  }
  loadInvoice(id) {
    this.invoiceService.getInvoiceById(id).subscribe((invoice) => {
      while (this.itemsFormArray.length) {
        this.itemsFormArray.removeAt(0);
      }
      for (const item of invoice.items) {
        const itemGroup = this.fb.group({
          description: [item.description, Validators.required],
          quantity: [item.quantity, [Validators.required, Validators.min(1)]],
          unitPrice: [item.unitPrice, [Validators.required, Validators.min(0)]],
          amount: [item.amount]
        });
        this.itemsFormArray.push(itemGroup);
      }
      this.invoiceForm.patchValue({
        invoiceNumber: invoice.invoiceNumber,
        issueDate: new Date(invoice.issueDate),
        dueDate: new Date(invoice.dueDate),
        status: invoice.status,
        reservationId: invoice.reservationId,
        guestName: invoice.guestName,
        guestEmail: invoice.guestEmail,
        guestPhone: invoice.guestPhone,
        guestAddress: invoice.guestAddress,
        roomNumber: invoice.roomNumber,
        checkInDate: invoice.checkInDate ? new Date(invoice.checkInDate) : null,
        checkOutDate: invoice.checkOutDate ? new Date(invoice.checkOutDate) : null,
        stayDuration: invoice.stayDuration,
        subtotal: invoice.subtotal,
        taxRate: invoice.taxRate,
        taxAmount: invoice.taxAmount,
        totalAmount: invoice.totalAmount,
        amountPaid: invoice.amountPaid,
        balanceDue: invoice.balanceDue,
        notes: invoice.notes
      });
    }, (error) => {
      console.error("Error loading invoice:", error);
      this.snackBar.open("Error loading invoice", "Close", { duration: 3e3 });
    });
  }
  setupAutocomplete() {
    this.filteredGuests = this.invoiceForm.get("guestName").valueChanges.pipe(startWith(""), map((value) => this.filterGuests(value)));
    this.filteredRooms = this.invoiceForm.get("roomNumber").valueChanges.pipe(startWith(""), map((value) => this.filterRooms(value)));
  }
  filterGuests(value) {
    const filterValue = typeof value === "string" ? value.toLowerCase() : "";
    return this.guests.filter((guest) => `${guest.firstName} ${guest.lastName}`.toLowerCase().includes(filterValue));
  }
  filterRooms(value) {
    const filterValue = typeof value === "string" ? value.toLowerCase() : "";
    return this.rooms.filter((room) => room.roomNumber.toLowerCase().includes(filterValue) || room.type.toLowerCase().includes(filterValue));
  }
  displayGuest(guest) {
    return guest ? `${guest.firstName} ${guest.lastName}` : "";
  }
  displayRoom(room) {
    return room ? `${room.roomNumber} - ${room.type}` : "";
  }
  onReservationChange(reservationId) {
    const reservation = this.reservations.find((r) => r.id === reservationId);
    if (reservation) {
      this.invoiceForm.patchValue({
        guestName: reservation.guestName,
        roomNumber: reservation.roomNumber,
        checkInDate: new Date(reservation.checkInDate),
        checkOutDate: new Date(reservation.checkOutDate),
        stayDuration: this.calculateStayDuration(reservation.checkInDate, reservation.checkOutDate)
      });
      while (this.itemsFormArray.length) {
        this.itemsFormArray.removeAt(0);
      }
      const itemGroup = this.fb.group({
        description: [`Room Charge - ${reservation.roomNumber}`, Validators.required],
        quantity: [reservation.stayDuration, [Validators.required, Validators.min(1)]],
        unitPrice: [reservation.roomRate, [Validators.required, Validators.min(0)]],
        amount: [reservation.stayDuration * reservation.roomRate]
      });
      this.itemsFormArray.push(itemGroup);
      this.updateTotals();
    }
  }
  calculateStayDuration(checkIn, checkOut) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  }
  onSubmit() {
    if (this.invoiceForm.invalid) {
      return;
    }
    const formValue = this.invoiceForm.value;
    const invoice = {
      id: this.invoiceId || void 0,
      invoiceNumber: formValue.invoiceNumber,
      issueDate: formValue.issueDate,
      dueDate: formValue.dueDate,
      status: formValue.status,
      reservationId: formValue.reservationId,
      guestName: typeof formValue.guestName === "string" ? formValue.guestName : formValue.guestName.firstName + " " + formValue.guestName.lastName,
      guestEmail: formValue.guestEmail,
      guestPhone: formValue.guestPhone,
      guestAddress: formValue.guestAddress,
      roomNumber: typeof formValue.roomNumber === "string" ? formValue.roomNumber : formValue.roomNumber.roomNumber,
      checkInDate: formValue.checkInDate,
      checkOutDate: formValue.checkOutDate,
      stayDuration: formValue.stayDuration,
      items: formValue.items,
      subtotal: formValue.subtotal,
      taxRate: formValue.taxRate,
      taxAmount: formValue.taxAmount,
      totalAmount: formValue.totalAmount,
      amountPaid: formValue.amountPaid,
      balanceDue: formValue.balanceDue,
      notes: formValue.notes
    };
    if (this.isEditMode) {
      this.invoiceService.updateInvoice(invoice).subscribe(() => {
        this.snackBar.open("Invoice updated successfully", "Close", { duration: 3e3 });
        this.router.navigate(["/invoices", this.invoiceId]);
      }, (error) => {
        console.error("Error updating invoice:", error);
        this.snackBar.open("Error updating invoice", "Close", { duration: 3e3 });
      });
    } else {
      this.invoiceService.createInvoice(invoice).subscribe((newInvoice) => {
        this.snackBar.open("Invoice created successfully", "Close", { duration: 3e3 });
        this.router.navigate(["/invoices", newInvoice.id]);
      }, (error) => {
        console.error("Error creating invoice:", error);
        this.snackBar.open("Error creating invoice", "Close", { duration: 3e3 });
      });
    }
  }
  static {
    this.\u0275fac = function InvoiceFormComponent_Factory(t) {
      return new (t || _InvoiceFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(GuestService), \u0275\u0275directiveInject(RoomService), \u0275\u0275directiveInject(ReservationService), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceFormComponent, selectors: [["app-invoice-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 146, vars: 31, consts: [["issueDatePicker", ""], ["dueDatePicker", ""], ["autoGuest", "matAutocomplete"], ["autoRoom", "matAutocomplete"], ["checkInPicker", ""], ["checkOutPicker", ""], [1, "container"], [1, "header"], ["mat-button", "", "color", "primary", "routerLink", "/invoices"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "row"], ["appearance", "outline"], ["matInput", "", "formControlName", "invoiceNumber", "placeholder", "INV-00001"], [4, "ngIf"], ["matInput", "", "formControlName", "issueDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "formControlName", "dueDate", 3, "matDatepicker"], ["formControlName", "status"], ["value", "Unpaid"], ["value", "Partially Paid"], ["value", "Paid"], ["appearance", "outline", 1, "full-width"], ["formControlName", "reservationId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "guestName", 3, "matAutocomplete"], [3, "displayWith"], ["matInput", "", "formControlName", "roomNumber", 3, "matAutocomplete"], ["matInput", "", "formControlName", "checkInDate", 3, "matDatepicker"], ["matInput", "", "formControlName", "checkOutDate", 3, "matDatepicker"], [1, "section-header"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "items-table", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "unitPrice"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matInput", "", "formControlName", "subtotal", "readonly", ""], ["matInput", "", "type", "number", "formControlName", "taxRate", "min", "0", "max", "100", 3, "input"], ["matInput", "", "formControlName", "taxAmount", "readonly", ""], ["matInput", "", "formControlName", "totalAmount", "readonly", ""], ["class", "row", 4, "ngIf"], ["matInput", "", "formControlName", "notes", "rows", "4", "placeholder", "Add any notes or special instructions here"], [1, "actions"], ["mat-button", "", "routerLink", "/invoices"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Room charge, Service, etc.", 3, "formControl"], ["matInput", "", "type", "number", "min", "1", 3, "input", "formControl"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", 3, "input", "formControl"], ["matInput", "", "type", "number", "readonly", "", 3, "formControl"], ["type", "button", "mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["matInput", "", "type", "number", "formControlName", "amountPaid", "min", "0", 3, "input"], ["matInput", "", "formControlName", "balanceDue", "readonly", ""]], template: function InvoiceFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h1");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 8)(5, "mat-icon");
        \u0275\u0275text(6, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Back to Invoices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card")(9, "mat-card-content")(10, "form", 9);
        \u0275\u0275listener("ngSubmit", function InvoiceFormComponent_Template_form_ngSubmit_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(11, "div", 10)(12, "h2");
        \u0275\u0275text(13, "Basic Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-label");
        \u0275\u0275text(17, "Invoice Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 13);
        \u0275\u0275template(19, InvoiceFormComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 12)(21, "mat-label");
        \u0275\u0275text(22, "Issue Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 15)(24, "mat-datepicker-toggle", 16)(25, "mat-datepicker", null, 0);
        \u0275\u0275template(27, InvoiceFormComponent_mat_error_27_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-form-field", 12)(29, "mat-label");
        \u0275\u0275text(30, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 17)(32, "mat-datepicker-toggle", 16)(33, "mat-datepicker", null, 1);
        \u0275\u0275template(35, InvoiceFormComponent_mat_error_35_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 12)(37, "mat-label");
        \u0275\u0275text(38, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-select", 18)(40, "mat-option", 19);
        \u0275\u0275text(41, "Unpaid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 20);
        \u0275\u0275text(43, "Partially Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 21);
        \u0275\u0275text(45, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(46, InvoiceFormComponent_mat_error_46_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 10)(48, "h2");
        \u0275\u0275text(49, "Reservation Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 11)(51, "mat-form-field", 22)(52, "mat-label");
        \u0275\u0275text(53, "Reservation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-select", 23);
        \u0275\u0275listener("selectionChange", function InvoiceFormComponent_Template_mat_select_selectionChange_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onReservationChange($event.value));
        });
        \u0275\u0275template(55, InvoiceFormComponent_mat_option_55_Template, 4, 9, "mat-option", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 11)(57, "mat-form-field", 12)(58, "mat-label");
        \u0275\u0275text(59, "Guest");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "input", 25);
        \u0275\u0275elementStart(61, "mat-autocomplete", 26, 2);
        \u0275\u0275template(63, InvoiceFormComponent_mat_option_63_Template, 2, 3, "mat-option", 24);
        \u0275\u0275pipe(64, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "mat-form-field", 12)(66, "mat-label");
        \u0275\u0275text(67, "Room");
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "input", 27);
        \u0275\u0275elementStart(69, "mat-autocomplete", 26, 3);
        \u0275\u0275template(71, InvoiceFormComponent_mat_option_71_Template, 2, 3, "mat-option", 24);
        \u0275\u0275pipe(72, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "mat-form-field", 12)(74, "mat-label");
        \u0275\u0275text(75, "Check-in Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "input", 28)(77, "mat-datepicker-toggle", 16)(78, "mat-datepicker", null, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-form-field", 12)(81, "mat-label");
        \u0275\u0275text(82, "Check-out Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "input", 29)(84, "mat-datepicker-toggle", 16)(85, "mat-datepicker", null, 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 10)(88, "div", 30)(89, "h2");
        \u0275\u0275text(90, "Invoice Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 31);
        \u0275\u0275listener("click", function InvoiceFormComponent_Template_button_click_91_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addItem());
        });
        \u0275\u0275elementStart(92, "mat-icon");
        \u0275\u0275text(93, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " Add Item ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "table", 32);
        \u0275\u0275elementContainerStart(96, 33);
        \u0275\u0275template(97, InvoiceFormComponent_th_97_Template, 2, 0, "th", 34)(98, InvoiceFormComponent_td_98_Template, 3, 1, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(99, 36);
        \u0275\u0275template(100, InvoiceFormComponent_th_100_Template, 2, 0, "th", 34)(101, InvoiceFormComponent_td_101_Template, 3, 1, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(102, 37);
        \u0275\u0275template(103, InvoiceFormComponent_th_103_Template, 2, 0, "th", 34)(104, InvoiceFormComponent_td_104_Template, 3, 1, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(105, 38);
        \u0275\u0275template(106, InvoiceFormComponent_th_106_Template, 2, 0, "th", 34)(107, InvoiceFormComponent_td_107_Template, 3, 1, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(108, 39);
        \u0275\u0275template(109, InvoiceFormComponent_th_109_Template, 2, 0, "th", 34)(110, InvoiceFormComponent_td_110_Template, 4, 0, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(111, InvoiceFormComponent_tr_111_Template, 1, 0, "tr", 40)(112, InvoiceFormComponent_tr_112_Template, 1, 0, "tr", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 10)(114, "h2");
        \u0275\u0275text(115, "Payment Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 11)(117, "mat-form-field", 12)(118, "mat-label");
        \u0275\u0275text(119, "Subtotal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(120, "input", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "mat-form-field", 12)(122, "mat-label");
        \u0275\u0275text(123, "Tax Rate (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "input", 43);
        \u0275\u0275listener("input", function InvoiceFormComponent_Template_input_input_124_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateTotals());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "mat-form-field", 12)(126, "mat-label");
        \u0275\u0275text(127, "Tax Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(128, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "mat-form-field", 12)(130, "mat-label");
        \u0275\u0275text(131, "Total Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(132, "input", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(133, InvoiceFormComponent_div_133_Template, 9, 0, "div", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 10)(135, "h2");
        \u0275\u0275text(136, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "mat-form-field", 22)(138, "mat-label");
        \u0275\u0275text(139, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275element(140, "textarea", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "div", 48)(142, "button", 49);
        \u0275\u0275text(143, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "button", 50);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_11_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_30_0;
        const issueDatePicker_r17 = \u0275\u0275reference(26);
        const dueDatePicker_r18 = \u0275\u0275reference(34);
        const autoGuest_r19 = \u0275\u0275reference(62);
        const autoRoom_r20 = \u0275\u0275reference(70);
        const checkInPicker_r21 = \u0275\u0275reference(79);
        const checkOutPicker_r22 = \u0275\u0275reference(86);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Invoice" : "Create New Invoice");
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.invoiceForm);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_8_0 = ctx.invoiceForm.get("invoiceNumber")) == null ? null : tmp_8_0.hasError("required"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matDatepicker", issueDatePicker_r17);
        \u0275\u0275advance();
        \u0275\u0275property("for", issueDatePicker_r17);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_11_0 = ctx.invoiceForm.get("issueDate")) == null ? null : tmp_11_0.hasError("required"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matDatepicker", dueDatePicker_r18);
        \u0275\u0275advance();
        \u0275\u0275property("for", dueDatePicker_r18);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_14_0 = ctx.invoiceForm.get("dueDate")) == null ? null : tmp_14_0.hasError("required"));
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", (tmp_15_0 = ctx.invoiceForm.get("status")) == null ? null : tmp_15_0.hasError("required"));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.reservations);
        \u0275\u0275advance(5);
        \u0275\u0275property("matAutocomplete", autoGuest_r19);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayGuest);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(64, 27, ctx.filteredGuests));
        \u0275\u0275advance(5);
        \u0275\u0275property("matAutocomplete", autoRoom_r20);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayRoom);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(72, 29, ctx.filteredRooms));
        \u0275\u0275advance(5);
        \u0275\u0275property("matDatepicker", checkInPicker_r21);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkInPicker_r21);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", checkOutPicker_r22);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkOutPicker_r22);
        \u0275\u0275advance(11);
        \u0275\u0275property("dataSource", ctx.itemsFormArray.controls);
        \u0275\u0275advance(16);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(21);
        \u0275\u0275property("ngIf", ((tmp_30_0 = ctx.invoiceForm.get("status")) == null ? null : tmp_30_0.value) !== "Unpaid");
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.invoiceForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Invoice" : "Create Invoice", " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      DatePipe,
      RouterModule,
      RouterLink,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
      MaxValidator,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger
    ], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.items-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-column-description[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.mat-column-quantity[_ngcontent-%COMP%], .mat-column-unitPrice[_ngcontent-%COMP%], .mat-column-amount[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=invoice-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceFormComponent, { className: "InvoiceFormComponent", filePath: "src\\app\\features\\invoices\\invoice-form\\invoice-form.component.ts", lineNumber: 322 });
})();
export {
  InvoiceFormComponent
};
//# sourceMappingURL=chunk-5YFAVKYD.js.map
