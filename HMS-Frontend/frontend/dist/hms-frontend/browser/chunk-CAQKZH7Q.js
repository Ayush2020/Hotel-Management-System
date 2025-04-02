import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-PE666PWF.js";
import {
  MatBadgeModule
} from "./chunk-SUAMLYEC.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-T7YIB5D2.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MZ5CGW3Y.js";
import {
  MatChipsModule
} from "./chunk-PFMZ3XHA.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-X5VU3L5S.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LEQDTOBB.js";
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
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
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
  MatNativeDateModule,
  MatOption
} from "./chunk-U5BHYJH7.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  HttpClient,
  NgClass,
  NgIf,
  Router,
  catchError,
  finalize,
  inject,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/reservations/reservation-list/reservation-list.component.ts
var _c0 = () => [10, 25, 50, 100];
function ReservationListComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "mat-spinner", 52);
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_th_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " ID ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r2.id, " ");
  }
}
function ReservationListComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Guest ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r3.guestName, " ");
  }
}
function ReservationListComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Room ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r4.roomNumber, " ");
  }
}
function ReservationListComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Check-in ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, reservation_r5.checkInDate), " ");
  }
}
function ReservationListComponent_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Check-out ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, reservation_r6.checkOutDate), " ");
  }
}
function ReservationListComponent_th_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reservation_r7 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r7.getStatusClass(reservation_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r7.status, " ");
  }
}
function ReservationListComponent_th_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Payment ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reservation_r9 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r7.getPaymentStatusClass(reservation_r9.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r9.paymentStatus, " ");
  }
}
function ReservationListComponent_th_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, " Amount ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, reservation_r10.totalAmount), " ");
  }
}
function ReservationListComponent_th_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 57);
    \u0275\u0275text(1, " Actions ");
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_td_111_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function ReservationListComponent_td_111_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const reservation_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.confirmCancelReservation(reservation_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function ReservationListComponent_td_111_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function ReservationListComponent_td_111_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const reservation_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.checkInReservation(reservation_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "login");
    \u0275\u0275elementEnd()();
  }
}
function ReservationListComponent_td_111_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ReservationListComponent_td_111_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const reservation_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.checkOutReservation(reservation_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "logout");
    \u0275\u0275elementEnd()();
  }
}
function ReservationListComponent_td_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 54)(1, "button", 58);
    \u0275\u0275listener("click", function ReservationListComponent_td_111_Template_button_click_1_listener() {
      const reservation_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.viewReservation(reservation_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ReservationListComponent_td_111_Template_button_click_4_listener() {
      const reservation_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editReservation(reservation_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ReservationListComponent_td_111_button_7_Template, 3, 0, "button", 60)(8, ReservationListComponent_td_111_button_8_Template, 3, 0, "button", 61)(9, ReservationListComponent_td_111_button_9_Template, 3, 0, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r12 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", reservation_r12.status !== "CANCELLED" && reservation_r12.status !== "CHECKED_OUT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reservation_r12.status === "CONFIRMED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reservation_r12.status === "CHECKED_IN");
  }
}
function ReservationListComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 66);
  }
}
function ReservationListComponent_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 67);
    \u0275\u0275listener("click", function ReservationListComponent_tr_113_Template_tr_click_0_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.viewReservation(row_r17));
    });
    \u0275\u0275elementEnd();
  }
}
function ReservationListComponent_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 68)(1, "td", 69);
    \u0275\u0275text(2, " No reservations found matching the filter criteria ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r7.displayedColumns.length);
  }
}
var ReservationListComponent = class _ReservationListComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.reservations = [];
    this.loading = false;
    this.displayedColumns = ["id", "guestName", "roomNumber", "checkInDate", "checkOutDate", "status", "paymentStatus", "totalAmount", "actions"];
    this.currentPage = 0;
    this.pageSize = 10;
    this.totalReservations = 0;
    this.currentSort = { active: "checkInDate", direction: "asc" };
    this.filterForm = this.fb.group({
      search: [""],
      status: [""],
      paymentStatus: [""],
      checkInDateFrom: [null],
      checkInDateTo: [null],
      checkOutDateFrom: [null],
      checkOutDateTo: [null]
    });
  }
  ngOnInit() {
    this.loadReservations();
  }
  loadReservations() {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    const params = {
      page: this.currentPage,
      size: this.pageSize,
      sort: `${this.currentSort.active},${this.currentSort.direction}`
    };
    const filters = this.filterForm.value;
    if (filters.search)
      params.search = filters.search;
    if (filters.status)
      params.status = filters.status;
    if (filters.paymentStatus)
      params.paymentStatus = filters.paymentStatus;
    if (filters.checkInDateFrom) {
      params.checkInDateFrom = this.formatDate(filters.checkInDateFrom);
    }
    if (filters.checkInDateTo) {
      params.checkInDateTo = this.formatDate(filters.checkInDateTo);
    }
    if (filters.checkOutDateFrom) {
      params.checkOutDateFrom = this.formatDate(filters.checkOutDateFrom);
    }
    if (filters.checkOutDateTo) {
      params.checkOutDateTo = this.formatDate(filters.checkOutDateTo);
    }
    this.http.get(`${baseUrl}/reservations`, { params }).pipe(catchError((error) => {
      console.error("Error loading reservations", error);
      this.snackBar.open("Failed to load reservations. Please try again later.", "Close", { duration: 5e3 });
      return of({ content: [], totalElements: 0 });
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response.content && Array.isArray(response.content)) {
        this.reservations = response.content;
        this.totalReservations = response.totalElements || response.content.length;
      } else if (Array.isArray(response)) {
        this.reservations = response;
        this.totalReservations = response.length;
      } else {
        this.reservations = [];
        this.totalReservations = 0;
      }
    });
  }
  formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  applyFilters() {
    this.currentPage = 0;
    this.loadReservations();
  }
  resetFilters() {
    this.filterForm.reset({
      search: "",
      status: "",
      paymentStatus: "",
      checkInDateFrom: null,
      checkInDateTo: null,
      checkOutDateFrom: null,
      checkOutDateTo: null
    });
    this.currentPage = 0;
    this.loadReservations();
  }
  pageChange(event2) {
    this.currentPage = event2.pageIndex;
    this.pageSize = event2.pageSize;
    this.loadReservations();
  }
  sortData(sort) {
    this.currentSort = sort;
    this.loadReservations();
  }
  getStatusClass(status) {
    status = status.toLowerCase().replace(/_/g, "-");
    return `status-${status}`;
  }
  getPaymentStatusClass(status) {
    status = status.toLowerCase().replace(/_/g, "-");
    return `payment-${status}`;
  }
  navigateToAddReservation() {
    this.router.navigate(["/reservations/new"]);
  }
  viewReservation(reservation) {
    this.router.navigate(["/reservations", reservation.id]);
  }
  editReservation(reservation) {
    event?.stopPropagation();
    this.router.navigate(["/reservations", reservation.id, "edit"]);
  }
  confirmCancelReservation(reservation) {
    event?.stopPropagation();
    if (confirm(`Are you sure you want to cancel reservation #${reservation.id}?`)) {
      this.updateReservationStatus(reservation.id, "CANCELLED");
    }
  }
  checkInReservation(reservation) {
    event?.stopPropagation();
    this.updateReservationStatus(reservation.id, "CHECKED_IN");
  }
  checkOutReservation(reservation) {
    event?.stopPropagation();
    this.updateReservationStatus(reservation.id, "CHECKED_OUT");
  }
  updateReservationStatus(reservationId, status) {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.patch(`${baseUrl}/reservations/${reservationId}/status`, { status }).pipe(catchError((error) => {
      console.error(`Error updating reservation status to ${status}`, error);
      this.snackBar.open(`Failed to update reservation status. Please try again later.`, "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response !== null) {
        const statusText = status.replace(/_/g, " ").toLowerCase();
        this.snackBar.open(`Reservation successfully ${statusText}`, "Close", { duration: 3e3 });
        this.loadReservations();
      }
    });
  }
  static {
    this.\u0275fac = function ReservationListComponent_Factory(t) {
      return new (t || _ReservationListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationListComponent, selectors: [["app-reservation-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 116, vars: 17, consts: [["checkInFromPicker", ""], ["checkInToPicker", ""], ["checkOutFromPicker", ""], ["checkOutToPicker", ""], [1, "reservation-list-container"], [1, "mat-headline-4"], [1, "actions-bar"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-card"], [3, "formGroup"], [1, "filter-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "search", "placeholder", "Guest name, room..."], ["matSuffix", ""], ["formControlName", "status"], ["value", ""], ["value", "CONFIRMED"], ["value", "PENDING"], ["value", "CHECKED_IN"], ["value", "CHECKED_OUT"], ["value", "CANCELLED"], ["formControlName", "paymentStatus"], ["value", "PAID"], ["value", "PARTIAL"], ["matInput", "", "formControlName", "checkInDateFrom", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "checkInDateTo", 3, "matDatepicker"], ["matInput", "", "formControlName", "checkOutDateFrom", 3, "matDatepicker"], ["matInput", "", "formControlName", "checkOutDateTo", 3, "matDatepicker"], [1, "filter-actions"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "table-container", "mat-elevation-z2"], ["class", "loading-overlay", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "matSortChange", "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "guestName"], ["matColumnDef", "roomNumber"], ["matColumnDef", "checkInDate"], ["matColumnDef", "checkOutDate"], ["matColumnDef", "status"], ["matColumnDef", "paymentStatus"], ["matColumnDef", "totalAmount"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "reservation-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "page", "length", "pageSize", "pageSizeOptions"], [1, "loading-overlay"], ["diameter", "40"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "status-chip", 3, "ngClass"], [1, "payment-chip", 3, "ngClass"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "View Details", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit Reservation", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Cancel Reservation", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Check In", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Check Out", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Cancel Reservation", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Check In", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Check Out", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "reservation-row", 3, "click"], [1, "mat-row"], [1, "mat-cell", "no-data"]], template: function ReservationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "h1", 5);
        \u0275\u0275text(2, "Reservation Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 6)(4, "button", 7);
        \u0275\u0275listener("click", function ReservationListComponent_Template_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateToAddReservation());
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " New Reservation ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card", 8)(9, "mat-card-content")(10, "form", 9)(11, "div", 10)(12, "mat-form-field", 11)(13, "mat-label");
        \u0275\u0275text(14, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 12);
        \u0275\u0275elementStart(16, "mat-icon", 13);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-form-field", 11)(19, "mat-label");
        \u0275\u0275text(20, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-select", 14)(22, "mat-option", 15);
        \u0275\u0275text(23, "All Statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 16);
        \u0275\u0275text(25, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 17);
        \u0275\u0275text(27, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 18);
        \u0275\u0275text(29, "Checked In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 19);
        \u0275\u0275text(31, "Checked Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 20);
        \u0275\u0275text(33, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "mat-form-field", 11)(35, "mat-label");
        \u0275\u0275text(36, "Payment Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-select", 21)(38, "mat-option", 15);
        \u0275\u0275text(39, "All Payment Statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 22);
        \u0275\u0275text(41, "Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 17);
        \u0275\u0275text(43, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 23);
        \u0275\u0275text(45, "Partial Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 20);
        \u0275\u0275text(47, "Cancelled");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 10)(49, "mat-form-field", 11)(50, "mat-label");
        \u0275\u0275text(51, "Check-in Date From");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 24)(53, "mat-datepicker-toggle", 25)(54, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-form-field", 11)(57, "mat-label");
        \u0275\u0275text(58, "Check-in Date To");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "input", 26)(60, "mat-datepicker-toggle", 25)(61, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-form-field", 11)(64, "mat-label");
        \u0275\u0275text(65, "Check-out Date From");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 27)(67, "mat-datepicker-toggle", 25)(68, "mat-datepicker", null, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-form-field", 11)(71, "mat-label");
        \u0275\u0275text(72, "Check-out Date To");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "input", 28)(74, "mat-datepicker-toggle", 25)(75, "mat-datepicker", null, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 29)(78, "button", 30);
        \u0275\u0275listener("click", function ReservationListComponent_Template_button_click_78_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275text(79, "Apply Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 31);
        \u0275\u0275listener("click", function ReservationListComponent_Template_button_click_80_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.resetFilters());
        });
        \u0275\u0275text(81, "Reset");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(82, "div", 32);
        \u0275\u0275template(83, ReservationListComponent_div_83_Template, 2, 0, "div", 33);
        \u0275\u0275elementStart(84, "table", 34);
        \u0275\u0275listener("matSortChange", function ReservationListComponent_Template_table_matSortChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sortData($event));
        });
        \u0275\u0275elementContainerStart(85, 35);
        \u0275\u0275template(86, ReservationListComponent_th_86_Template, 2, 0, "th", 36)(87, ReservationListComponent_td_87_Template, 2, 1, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(88, 38);
        \u0275\u0275template(89, ReservationListComponent_th_89_Template, 2, 0, "th", 36)(90, ReservationListComponent_td_90_Template, 2, 1, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(91, 39);
        \u0275\u0275template(92, ReservationListComponent_th_92_Template, 2, 0, "th", 36)(93, ReservationListComponent_td_93_Template, 2, 1, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(94, 40);
        \u0275\u0275template(95, ReservationListComponent_th_95_Template, 2, 0, "th", 36)(96, ReservationListComponent_td_96_Template, 3, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(97, 41);
        \u0275\u0275template(98, ReservationListComponent_th_98_Template, 2, 0, "th", 36)(99, ReservationListComponent_td_99_Template, 3, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(100, 42);
        \u0275\u0275template(101, ReservationListComponent_th_101_Template, 2, 0, "th", 36)(102, ReservationListComponent_td_102_Template, 3, 2, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(103, 43);
        \u0275\u0275template(104, ReservationListComponent_th_104_Template, 2, 0, "th", 36)(105, ReservationListComponent_td_105_Template, 3, 2, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(106, 44);
        \u0275\u0275template(107, ReservationListComponent_th_107_Template, 2, 0, "th", 36)(108, ReservationListComponent_td_108_Template, 3, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(109, 45);
        \u0275\u0275template(110, ReservationListComponent_th_110_Template, 2, 0, "th", 46)(111, ReservationListComponent_td_111_Template, 10, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(112, ReservationListComponent_tr_112_Template, 1, 0, "tr", 47)(113, ReservationListComponent_tr_113_Template, 1, 0, "tr", 48)(114, ReservationListComponent_tr_114_Template, 3, 1, "tr", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "mat-paginator", 50);
        \u0275\u0275listener("page", function ReservationListComponent_Template_mat_paginator_page_115_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChange($event));
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const checkInFromPicker_r18 = \u0275\u0275reference(55);
        const checkInToPicker_r19 = \u0275\u0275reference(62);
        const checkOutFromPicker_r20 = \u0275\u0275reference(69);
        const checkOutToPicker_r21 = \u0275\u0275reference(76);
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.filterForm);
        \u0275\u0275advance(42);
        \u0275\u0275property("matDatepicker", checkInFromPicker_r18);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkInFromPicker_r18);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", checkInToPicker_r19);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkInToPicker_r19);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", checkOutFromPicker_r20);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkOutFromPicker_r20);
        \u0275\u0275advance(6);
        \u0275\u0275property("matDatepicker", checkOutToPicker_r21);
        \u0275\u0275advance();
        \u0275\u0275property("for", checkOutToPicker_r21);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.reservations);
        \u0275\u0275advance(28);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalReservations)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(16, _c0));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      CurrencyPipe,
      DatePipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatCardContent,
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
      MatNoDataRow,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatNativeDateModule,
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatSort,
      MatSortHeader,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatBadgeModule
    ], styles: ["\n\n.reservation-list-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n}\n.reservation-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.reservation-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.status-chip[_ngcontent-%COMP%], .payment-chip[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.status-checked-in[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-checked-out[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #616161;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.payment-paid[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.payment-pending[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.payment-partial[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n  color: #00838f;\n}\n.payment-cancelled[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=reservation-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationListComponent, { className: "ReservationListComponent", filePath: "src\\app\\features\\reservations\\reservation-list\\reservation-list.component.ts", lineNumber: 376 });
})();
export {
  ReservationListComponent
};
//# sourceMappingURL=chunk-CAQKZH7Q.js.map
