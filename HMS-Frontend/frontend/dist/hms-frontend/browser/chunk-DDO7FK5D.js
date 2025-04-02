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
  MatDivider,
  MatDividerModule
} from "./chunk-YNKC65FH.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MZ5CGW3Y.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-A73SGYBN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WL3U4NOB.js";
import {
  MatSnackBar
} from "./chunk-YYXQY53Y.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-PZ47AC3Q.js";
import "./chunk-W6NUDNO3.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-ZKLSL4BO.js";
import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  MatNativeDateModule,
  MatOption
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  HttpClient,
  Location,
  NgForOf,
  NgIf,
  Router,
  catchError,
  debounceTime,
  finalize,
  forkJoin,
  inject,
  map,
  of,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/app/features/reservations/reservation-form/reservation-form.component.ts
function ReservationFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_option_23_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReservationFormComponent_mat_option_23_mat_icon_4_Template, 2, 0, "mat-icon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r2 = ctx.$implicit;
    \u0275\u0275property("value", guest_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", guest_r2.firstName, " ", guest_r2.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(guest_r2.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", guest_r2.vip);
  }
}
function ReservationFormComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Guest is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "span", 45);
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "span", 45);
    \u0275\u0275text(8, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "span", 45);
    \u0275\u0275text(13, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedGuest.firstName, " ", ctx_r2.selectedGuest.lastName, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedGuest.email || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedGuest.phone || "Not provided");
  }
}
function ReservationFormComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275property("value", room_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", room_r4.roomNumber, " - ", room_r4.type, " (", room_r4.capacity, " person) - ", \u0275\u0275pipeBind1(2, 5, room_r4.price), " ");
  }
}
function ReservationFormComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Room selection is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 44)(2, "span", 45);
    \u0275\u0275text(3, "Room Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "span", 45);
    \u0275\u0275text(8, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "span", 45);
    \u0275\u0275text(13, "Capacity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "span", 45);
    \u0275\u0275text(18, "Price per night:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 46);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.roomNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRoom.capacity, " person");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 4, ctx_r2.selectedRoom.price));
  }
}
function ReservationFormComponent_mat_error_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Check-in date is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Check-out date is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Status is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_error_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Payment status is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_error_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Total amount is required ");
    \u0275\u0275elementEnd();
  }
}
function ReservationFormComponent_mat_error_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Amount must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
var ReservationFormComponent = class _ReservationFormComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.location = inject(Location);
    this.snackBar = inject(MatSnackBar);
    this.isEditMode = false;
    this.loading = false;
    this.guests = [];
    this.selectedGuest = null;
    this.availableRooms = [];
    this.selectedRoom = null;
    this.reservationForm = this.fb.group({
      guestSearch: ["", Validators.required],
      guestId: ["", Validators.required],
      roomId: ["", Validators.required],
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      status: ["CONFIRMED", Validators.required],
      totalAmount: [0, [Validators.required, Validators.min(0.01)]],
      paymentStatus: ["PENDING", Validators.required],
      notes: [""]
    });
    this.filteredGuests$ = this.reservationForm.get("guestSearch").valueChanges.pipe(startWith(""), debounceTime(300), map((value) => {
      const search = typeof value === "string" ? value.toLowerCase() : "";
      if (search === "") {
        return this.guests.slice(0, 10);
      }
      return this.guests.filter((guest) => guest.firstName.toLowerCase().includes(search) || guest.lastName.toLowerCase().includes(search) || guest.email && guest.email.toLowerCase().includes(search) || guest.phone && guest.phone.includes(search)).slice(0, 10);
    }));
    this.reservationForm.get("guestSearch").valueChanges.subscribe((value) => {
      if (value && typeof value !== "string") {
        this.selectedGuest = value;
        this.reservationForm.patchValue({ guestId: value.id });
      } else {
        this.selectedGuest = null;
        this.reservationForm.patchValue({ guestId: "" });
      }
    });
    this.reservationForm.get("roomId").valueChanges.subscribe((roomId) => {
      this.selectedRoom = this.availableRooms.find((room) => room.id === roomId) || null;
      if (this.selectedRoom) {
        this.calculateTotalAmount();
      }
    });
    this.reservationForm.get("checkInDate").valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
    this.reservationForm.get("checkOutDate").valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  }
  ngOnInit() {
    this.loading = true;
    this.route.queryParamMap.subscribe((params) => {
      const guestId = params.get("guestId");
      if (guestId) {
        this.loadSelectedGuest(Number(guestId));
      }
    });
    this.route.paramMap.pipe(switchMap((params) => {
      const reservationId = params.get("id");
      const baseUrl = environment.apiUrl;
      const guestsRequest = this.http.get(`${baseUrl}/guests`).pipe(catchError((error) => {
        console.error("Error loading guests", error);
        this.snackBar.open("Failed to load guests. Please try again later.", "Close", { duration: 5e3 });
        return of([]);
      }));
      const roomsRequest = this.http.get(`${baseUrl}/rooms?status=AVAILABLE`).pipe(catchError((error) => {
        console.error("Error loading rooms", error);
        this.snackBar.open("Failed to load available rooms. Please try again later.", "Close", { duration: 5e3 });
        return of([]);
      }));
      if (reservationId) {
        this.isEditMode = true;
        const reservationRequest = this.http.get(`${baseUrl}/reservations/${reservationId}`).pipe(catchError((error) => {
          console.error("Error loading reservation details", error);
          this.snackBar.open("Failed to load reservation details. Please try again later.", "Close", { duration: 5e3 });
          return of(null);
        }));
        return forkJoin({
          guests: guestsRequest,
          rooms: roomsRequest,
          reservation: reservationRequest
        });
      } else {
        return forkJoin({
          guests: guestsRequest,
          rooms: roomsRequest,
          reservation: of(null)
        });
      }
    }), finalize(() => this.loading = false)).subscribe((data) => {
      this.guests = data.guests;
      this.availableRooms = data.rooms;
      if (data.reservation) {
        this.populateForm(data.reservation);
      }
    });
  }
  loadSelectedGuest(guestId) {
    const baseUrl = environment.apiUrl;
    this.http.get(`${baseUrl}/guests/${guestId}`).pipe(catchError((error) => {
      console.error("Error loading guest details", error);
      return of(null);
    })).subscribe((guest) => {
      if (guest) {
        this.selectedGuest = guest;
        this.reservationForm.patchValue({
          guestSearch: guest,
          guestId: guest.id
        });
      }
    });
  }
  populateForm(reservation) {
    const baseUrl = environment.apiUrl;
    this.http.get(`${baseUrl}/guests/${reservation.guestId}`).pipe(catchError((error) => {
      console.error("Error loading guest details", error);
      return of(null);
    })).subscribe((guest) => {
      if (guest) {
        this.selectedGuest = guest;
        const checkInDate = new Date(reservation.checkInDate);
        const checkOutDate = new Date(reservation.checkOutDate);
        this.reservationForm.patchValue({
          guestSearch: guest,
          guestId: reservation.guestId,
          roomId: reservation.roomId,
          checkInDate,
          checkOutDate,
          status: reservation.status,
          totalAmount: reservation.totalAmount,
          paymentStatus: reservation.paymentStatus,
          notes: reservation.notes
        });
        if (!this.availableRooms.some((r) => r.id === reservation.roomId)) {
          this.http.get(`${baseUrl}/rooms/${reservation.roomId}`).pipe(catchError((error) => {
            console.error("Error loading room details", error);
            return of(null);
          })).subscribe((room) => {
            if (room) {
              this.availableRooms.push(room);
              this.selectedRoom = room;
            }
          });
        } else {
          this.selectedRoom = this.availableRooms.find((room) => room.id === reservation.roomId) || null;
        }
      }
    });
  }
  calculateTotalAmount() {
    const checkInDate = this.reservationForm.get("checkInDate")?.value;
    const checkOutDate = this.reservationForm.get("checkOutDate")?.value;
    if (this.selectedRoom && checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const nights = Math.max(1, Math.round((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)));
      const totalAmount = this.selectedRoom.price * nights;
      this.reservationForm.patchValue({ totalAmount });
    }
  }
  displayGuestFn(guest) {
    return guest ? `${guest.firstName} ${guest.lastName}` : "";
  }
  onSubmit() {
    if (this.reservationForm.invalid) {
      return;
    }
    this.loading = true;
    const formValue = this.reservationForm.value;
    const baseUrl = environment.apiUrl;
    const checkInDate = new Date(formValue.checkInDate);
    const checkOutDate = new Date(formValue.checkOutDate);
    const reservation = {
      guestId: formValue.guestId,
      roomId: formValue.roomId,
      checkInDate: checkInDate.toISOString().split("T")[0],
      checkOutDate: checkOutDate.toISOString().split("T")[0],
      status: formValue.status,
      totalAmount: formValue.totalAmount,
      paymentStatus: formValue.paymentStatus,
      notes: formValue.notes
    };
    if (this.isEditMode) {
      const reservationId = this.route.snapshot.paramMap.get("id");
      this.http.put(`${baseUrl}/reservations/${reservationId}`, reservation).pipe(catchError((error) => {
        console.error("Error updating reservation", error);
        this.snackBar.open("Failed to update reservation. Please try again later.", "Close", { duration: 5e3 });
        return of(null);
      }), finalize(() => this.loading = false)).subscribe((response) => {
        if (response) {
          this.snackBar.open("Reservation updated successfully", "Close", { duration: 3e3 });
          this.router.navigate(["/reservations", reservationId]);
        }
      });
    } else {
      this.http.post(`${baseUrl}/reservations`, reservation).pipe(catchError((error) => {
        console.error("Error creating reservation", error);
        this.snackBar.open("Failed to create reservation. Please try again later.", "Close", { duration: 5e3 });
        return of(null);
      }), finalize(() => this.loading = false)).subscribe((response) => {
        if (response) {
          this.snackBar.open("Reservation created successfully", "Close", { duration: 3e3 });
          this.router.navigate(["/reservations"]);
        }
      });
    }
  }
  goBack() {
    this.location.back();
  }
  static {
    this.\u0275fac = function ReservationFormComponent_Factory(t) {
      return new (t || _ReservationFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationFormComponent, selectors: [["app-reservation-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 109, vars: 25, consts: [["autoGuest", "matAutocomplete"], ["checkInPicker", ""], ["checkOutPicker", ""], [1, "reservation-form-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "back-button"], ["mat-button", "", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "guestSearch", "placeholder", "Search by name, email or phone", "required", "", 3, "matAutocomplete"], [3, "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "guest-info", 4, "ngIf"], ["formControlName", "roomId", "required", ""], ["class", "room-info", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "formControlName", "checkInDate", "required", "", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "checkOutDate", "required", "", 3, "matDatepicker"], ["formControlName", "status", "required", ""], ["value", "CONFIRMED"], ["value", "PENDING"], ["value", "CHECKED_IN"], ["value", "CHECKED_OUT"], ["value", "CANCELLED"], ["formControlName", "paymentStatus", "required", ""], ["value", "PAID"], ["value", "PARTIAL"], ["type", "number", "matInput", "", "formControlName", "totalAmount", "required", ""], ["matTextPrefix", ""], ["matInput", "", "formControlName", "notes", "placeholder", "Additional information or special requests", "rows", "4"], [1, "form-actions"], ["type", "button", "mat-button", "", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "loading-overlay"], ["diameter", "40"], [3, "value"], [1, "option-email"], ["color", "warn", "class", "vip-icon", 4, "ngIf"], ["color", "warn", 1, "vip-icon"], [1, "guest-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "room-info"]], template: function ReservationFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275template(1, ReservationFormComponent_div_1_Template, 2, 0, "div", 4);
        \u0275\u0275elementStart(2, "div", 5)(3, "button", 6);
        \u0275\u0275listener("click", function ReservationFormComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-card")(8, "mat-card-header")(9, "mat-card-title");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "mat-card-content")(12, "form", 7);
        \u0275\u0275listener("ngSubmit", function ReservationFormComponent_Template_form_ngSubmit_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(13, "div", 8)(14, "h3");
        \u0275\u0275text(15, "Guest Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "mat-form-field", 10)(18, "mat-label");
        \u0275\u0275text(19, "Guest");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementStart(21, "mat-autocomplete", 12, 0);
        \u0275\u0275template(23, ReservationFormComponent_mat_option_23_Template, 5, 5, "mat-option", 13);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, ReservationFormComponent_mat_error_25_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, ReservationFormComponent_div_26_Template, 16, 4, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "mat-divider");
        \u0275\u0275elementStart(28, "div", 8)(29, "h3");
        \u0275\u0275text(30, "Room Selection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 9)(32, "mat-form-field", 10)(33, "mat-label");
        \u0275\u0275text(34, "Room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-select", 16);
        \u0275\u0275template(36, ReservationFormComponent_mat_option_36_Template, 3, 7, "mat-option", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, ReservationFormComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, ReservationFormComponent_div_38_Template, 22, 6, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "mat-divider");
        \u0275\u0275elementStart(40, "div", 8)(41, "h3");
        \u0275\u0275text(42, "Reservation Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 9)(44, "mat-form-field", 18)(45, "mat-label");
        \u0275\u0275text(46, "Check-in Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 19)(48, "mat-datepicker-toggle", 20)(49, "mat-datepicker", null, 1);
        \u0275\u0275template(51, ReservationFormComponent_mat_error_51_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-form-field", 18)(53, "mat-label");
        \u0275\u0275text(54, "Check-out Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 21)(56, "mat-datepicker-toggle", 20)(57, "mat-datepicker", null, 2);
        \u0275\u0275template(59, ReservationFormComponent_mat_error_59_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 9)(61, "mat-form-field", 18)(62, "mat-label");
        \u0275\u0275text(63, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-select", 22)(65, "mat-option", 23);
        \u0275\u0275text(66, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-option", 24);
        \u0275\u0275text(68, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-option", 25);
        \u0275\u0275text(70, "Checked In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "mat-option", 26);
        \u0275\u0275text(72, "Checked Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-option", 27);
        \u0275\u0275text(74, "Cancelled");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(75, ReservationFormComponent_mat_error_75_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-form-field", 18)(77, "mat-label");
        \u0275\u0275text(78, "Payment Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-select", 28)(80, "mat-option", 29);
        \u0275\u0275text(81, "Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 24);
        \u0275\u0275text(83, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-option", 30);
        \u0275\u0275text(85, "Partial Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "mat-option", 27);
        \u0275\u0275text(87, "Cancelled");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(88, ReservationFormComponent_mat_error_88_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 9)(90, "mat-form-field", 10)(91, "mat-label");
        \u0275\u0275text(92, "Total Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(93, "input", 31);
        \u0275\u0275elementStart(94, "span", 32);
        \u0275\u0275text(95, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275template(96, ReservationFormComponent_mat_error_96_Template, 2, 0, "mat-error", 14)(97, ReservationFormComponent_mat_error_97_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div", 9)(99, "mat-form-field", 10)(100, "mat-label");
        \u0275\u0275text(101, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "textarea", 33);
        \u0275\u0275text(103, "                  ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "div", 34)(105, "button", 35);
        \u0275\u0275listener("click", function ReservationFormComponent_Template_button_click_105_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275text(106, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "button", 36);
        \u0275\u0275text(108);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        let tmp_12_0;
        let tmp_16_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        const autoGuest_r5 = \u0275\u0275reference(22);
        const checkInPicker_r6 = \u0275\u0275reference(50);
        const checkOutPicker_r7 = \u0275\u0275reference(58);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Reservation" : "Create New Reservation");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.reservationForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("matAutocomplete", autoGuest_r5);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayGuestFn);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(24, 23, ctx.filteredGuests$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.reservationForm.get("guestSearch")) == null ? null : tmp_9_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedGuest);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.availableRooms);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_12_0 = ctx.reservationForm.get("roomId")) == null ? null : tmp_12_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedRoom);
        \u0275\u0275advance(9);
        \u0275\u0275property("matDatepicker", checkInPicker_r6);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkInPicker_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_16_0 = ctx.reservationForm.get("checkInDate")) == null ? null : tmp_16_0.hasError("required"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matDatepicker", checkOutPicker_r7);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkOutPicker_r7);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_19_0 = ctx.reservationForm.get("checkOutDate")) == null ? null : tmp_19_0.hasError("required"));
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", (tmp_20_0 = ctx.reservationForm.get("status")) == null ? null : tmp_20_0.hasError("required"));
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", (tmp_21_0 = ctx.reservationForm.get("paymentStatus")) == null ? null : tmp_21_0.hasError("required"));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_22_0 = ctx.reservationForm.get("totalAmount")) == null ? null : tmp_22_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_23_0 = ctx.reservationForm.get("totalAmount")) == null ? null : tmp_23_0.hasError("min"));
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.reservationForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Reservation" : "Create Reservation", " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      CurrencyPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatNativeDateModule,
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger,
      MatDividerModule,
      MatDivider,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.reservation-form-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.option-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-left: 8px;\n}\n.vip-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.guest-info[_ngcontent-%COMP%], .room-info[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.info-row[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=reservation-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationFormComponent, { className: "ReservationFormComponent", filePath: "src\\app\\features\\reservations\\reservation-form\\reservation-form.component.ts", lineNumber: 369 });
})();
export {
  ReservationFormComponent
};
//# sourceMappingURL=chunk-DDO7FK5D.js.map
