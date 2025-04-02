import {
  MatDialogModule
} from "./chunk-72VLOWO4.js";
import {
  MatBadgeModule
} from "./chunk-SUAMLYEC.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-YNKC65FH.js";
import {
  MatChipsModule
} from "./chunk-PFMZ3XHA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LEQDTOBB.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-A73SGYBN.js";
import {
  MatSnackBar
} from "./chunk-YYXQY53Y.js";
import "./chunk-PZ47AC3Q.js";
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
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  HttpClient,
  Location,
  NgClass,
  NgIf,
  Router,
  catchError,
  finalize,
  forkJoin,
  inject,
  of,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/reservations/reservation-detail/reservation-detail.component.ts
function ReservationDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkInReservation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Check-in Guest ");
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkOutReservation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Check-out Guest ");
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editReservation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit ");
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmCancelReservation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancel Reservation ");
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_mat_divider_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider");
  }
}
function ReservationDetailComponent_ng_container_7_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.reservation.notes);
  }
}
function ReservationDetailComponent_ng_container_7_mat_card_80_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function ReservationDetailComponent_ng_container_7_mat_card_80_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon");
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.guest.email);
  }
}
function ReservationDetailComponent_ng_container_7_mat_card_80_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon");
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.guest.phone);
  }
}
function ReservationDetailComponent_ng_container_7_mat_card_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 35)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3, "Guest Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275template(7, ReservationDetailComponent_ng_container_7_mat_card_80_mat_icon_7_Template, 2, 0, "mat-icon", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-divider");
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275template(10, ReservationDetailComponent_ng_container_7_mat_card_80_div_10_Template, 5, 1, "div", 39)(11, ReservationDetailComponent_ng_container_7_mat_card_80_div_11_Template, 5, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 40)(13, "button", 41);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_mat_card_80_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewGuest());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " View Guest Details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r2.guest.firstName, " ", ctx_r2.guest.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.guest.vip);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.guest.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.guest.phone);
  }
}
function ReservationDetailComponent_ng_container_7_mat_card_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 44)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3, "Room Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "div", 45)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-divider");
    \u0275\u0275elementStart(11, "div", 47)(12, "div", 48)(13, "div", 23);
    \u0275\u0275text(14, "Floor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 48)(18, "div", 23);
    \u0275\u0275text(19, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 48)(23, "div", 23);
    \u0275\u0275text(24, "Price per Night");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 24);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 40)(29, "button", 41);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_container_7_mat_card_81_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewRoom());
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " View Room Details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Room ", ctx_r2.room.roomNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.room.type);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.room.floor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.room.capacity, " person(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 5, ctx_r2.room.price));
  }
}
function ReservationDetailComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "h1", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275template(11, ReservationDetailComponent_ng_container_7_button_11_Template, 4, 0, "button", 15)(12, ReservationDetailComponent_ng_container_7_button_12_Template, 4, 0, "button", 15)(13, ReservationDetailComponent_ng_container_7_button_13_Template, 4, 0, "button", 16)(14, ReservationDetailComponent_ng_container_7_button_14_Template, 4, 0, "button", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "div", 19)(17, "mat-card")(18, "mat-card-header")(19, "mat-card-title");
    \u0275\u0275text(20, "Reservation Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-card-content")(22, "div", 20)(23, "h3");
    \u0275\u0275text(24, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "div", 23);
    \u0275\u0275text(28, "Check-in Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 22)(33, "div", 23);
    \u0275\u0275text(34, "Check-out Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 24);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 22)(39, "div", 23);
    \u0275\u0275text(40, "Length of Stay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 24);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(43, "mat-divider");
    \u0275\u0275elementStart(44, "div", 20)(45, "h3");
    \u0275\u0275text(46, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 21)(48, "div", 22)(49, "div", 23);
    \u0275\u0275text(50, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 24);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 22)(55, "div", 23);
    \u0275\u0275text(56, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 25)(58, "span", 13);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(60, ReservationDetailComponent_ng_container_7_mat_divider_60_Template, 1, 0, "mat-divider", 26)(61, ReservationDetailComponent_ng_container_7_div_61_Template, 5, 1, "div", 27);
    \u0275\u0275element(62, "mat-divider");
    \u0275\u0275elementStart(63, "div", 20)(64, "h3");
    \u0275\u0275text(65, "System Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 21)(67, "div", 22)(68, "div", 23);
    \u0275\u0275text(69, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 24);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 22)(74, "div", 23);
    \u0275\u0275text(75, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 24);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "date");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(79, "div", 28);
    \u0275\u0275template(80, ReservationDetailComponent_ng_container_7_mat_card_80_Template, 17, 5, "mat-card", 29)(81, ReservationDetailComponent_ng_container_7_mat_card_81_Template, 33, 7, "mat-card", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Reservation #", ctx_r2.reservation.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(ctx_r2.reservation.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.reservation.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPaymentStatusClass(ctx_r2.reservation.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.reservation.paymentStatus, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.reservation.status === "CONFIRMED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.reservation.status === "CHECKED_IN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.reservation.status !== "CANCELLED" && ctx_r2.reservation.status !== "CHECKED_OUT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.reservation.status !== "CANCELLED" && ctx_r2.reservation.status !== "CHECKED_OUT");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 21, ctx_r2.reservation.checkInDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 24, ctx_r2.reservation.checkOutDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.calculateNights(), " night(s)");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 27, ctx_r2.reservation.totalAmount));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r2.getPaymentStatusClass(ctx_r2.reservation.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.reservation.paymentStatus, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.reservation.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.reservation.notes);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 29, ctx_r2.reservation.createdAt, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 32, ctx_r2.reservation.updatedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.guest);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.room);
  }
}
function ReservationDetailComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "h2");
    \u0275\u0275text(2, "Reservation Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The reservation you are looking for could not be found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function ReservationDetailComponent_ng_template_8_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(6, "Go Back to Reservations");
    \u0275\u0275elementEnd()();
  }
}
function ReservationDetailComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReservationDetailComponent_ng_template_8_div_0_Template, 7, 0, "div", 49);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.loading);
  }
}
var ReservationDetailComponent = class _ReservationDetailComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.location = inject(Location);
    this.snackBar = inject(MatSnackBar);
    this.reservation = null;
    this.guest = null;
    this.room = null;
    this.loading = false;
  }
  ngOnInit() {
    this.loadReservationData();
  }
  loadReservationData() {
    this.loading = true;
    this.route.paramMap.pipe(switchMap((params) => {
      const reservationId = params.get("id");
      if (!reservationId) {
        return of(null);
      }
      const baseUrl = environment.apiUrl;
      return this.http.get(`${baseUrl}/reservations/${reservationId}`).pipe(catchError((error) => {
        console.error("Error loading reservation details", error);
        if (error.status !== 404) {
          this.snackBar.open("Failed to load reservation details. Please try again later.", "Close", { duration: 5e3 });
        }
        return of(null);
      }), switchMap((reservation) => {
        if (!reservation) {
          return of(null);
        }
        return forkJoin({
          reservation: of(reservation),
          guest: this.http.get(`${baseUrl}/guests/${reservation.guestId}`).pipe(catchError((error) => {
            console.error("Error loading guest details", error);
            return of(null);
          })),
          room: this.http.get(`${baseUrl}/rooms/${reservation.roomId}`).pipe(catchError((error) => {
            console.error("Error loading room details", error);
            return of(null);
          }))
        });
      }), finalize(() => this.loading = false));
    })).subscribe((data) => {
      if (data) {
        this.reservation = data.reservation;
        this.guest = data.guest;
        this.room = data.room;
      }
    });
  }
  calculateNights() {
    if (!this.reservation)
      return 0;
    const checkIn = new Date(this.reservation.checkInDate);
    const checkOut = new Date(this.reservation.checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.round(timeDiff / (1e3 * 3600 * 24));
  }
  getStatusClass(status) {
    status = status.toLowerCase().replace(/_/g, "-");
    return `status-${status}`;
  }
  getPaymentStatusClass(status) {
    status = status.toLowerCase().replace(/_/g, "-");
    return `payment-${status}`;
  }
  goBack() {
    this.location.back();
  }
  editReservation() {
    if (this.reservation) {
      this.router.navigate(["/reservations", this.reservation.id, "edit"]);
    }
  }
  viewGuest() {
    if (this.guest) {
      this.router.navigate(["/guests", this.guest.id]);
    }
  }
  viewRoom() {
    if (this.room) {
      this.router.navigate(["/rooms", this.room.id]);
    }
  }
  confirmCancelReservation() {
    if (this.reservation && confirm("Are you sure you want to cancel this reservation?")) {
      this.updateReservationStatus("CANCELLED");
    }
  }
  checkInReservation() {
    if (this.reservation) {
      this.updateReservationStatus("CHECKED_IN");
    }
  }
  checkOutReservation() {
    if (this.reservation) {
      this.updateReservationStatus("CHECKED_OUT");
    }
  }
  updateReservationStatus(status) {
    if (!this.reservation)
      return;
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.patch(`${baseUrl}/reservations/${this.reservation.id}/status`, { status }).pipe(catchError((error) => {
      console.error(`Error updating reservation status to ${status}`, error);
      this.snackBar.open("Failed to update reservation status. Please try again later.", "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response) {
        const statusText = status.replace(/_/g, " ").toLowerCase();
        this.snackBar.open(`Reservation successfully ${statusText}`, "Close", { duration: 3e3 });
        this.loadReservationData();
      }
    });
  }
  static {
    this.\u0275fac = function ReservationDetailComponent_Factory(t) {
      return new (t || _ReservationDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationDetailComponent, selectors: [["app-reservation-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [["notFound", ""], [1, "reservation-detail-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "back-button"], ["mat-button", "", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "loading-overlay"], ["diameter", "40"], [1, "header-section"], [1, "reservation-info"], [1, "reservation-title"], [1, "status-badges"], [1, "status-chip", 3, "ngClass"], [1, "payment-chip", 3, "ngClass"], [1, "action-buttons"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "content-section"], [1, "details-card"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "payment-status"], [4, "ngIf"], ["class", "detail-section", 4, "ngIf"], [1, "related-cards"], ["class", "guest-card", 4, "ngIf"], ["class", "room-card", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "notes-content"], [1, "guest-card"], [1, "guest-name"], ["color", "warn", "matTooltip", "VIP Guest", 4, "ngIf"], [1, "contact-details"], ["class", "contact-item", 4, "ngIf"], [1, "card-actions"], ["mat-button", "", "color", "primary", 3, "click"], ["color", "warn", "matTooltip", "VIP Guest"], [1, "contact-item"], [1, "room-card"], [1, "room-header"], [1, "room-type"], [1, "room-details"], [1, "room-detail-item"], ["class", "not-found", 4, "ngIf"], [1, "not-found"]], template: function ReservationDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, ReservationDetailComponent_div_1_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function ReservationDetailComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back to Reservations ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ReservationDetailComponent_ng_container_7_Template, 82, 35, "ng-container", 5)(8, ReservationDetailComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const notFound_r10 = \u0275\u0275reference(9);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.reservation)("ngIfElse", notFound_r10);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      CurrencyPipe,
      DatePipe,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatDividerModule,
      MatDivider,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatBadgeModule,
      MatDialogModule
    ], styles: ["\n\n.reservation-detail-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.reservation-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 8px 0;\n}\n.status-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.status-chip[_ngcontent-%COMP%], .payment-chip[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.status-checked-in[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-checked-out[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #616161;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.payment-paid[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.payment-pending[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.payment-partial[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n  color: #00838f;\n}\n.payment-cancelled[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.content-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 24px;\n}\n@media (max-width: 960px) {\n  .content-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.details-card[_ngcontent-%COMP%], .related-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0 0 16px 0;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 4px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.payment-status[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.notes-content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  line-height: 1.5;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.guest-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.contact-details[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.room-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.room-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.room-type[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n}\n.room-details[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.room-detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=reservation-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationDetailComponent, { className: "ReservationDetailComponent", filePath: "src\\app\\features\\reservations\\reservation-detail\\reservation-detail.component.ts", lineNumber: 516 });
})();
export {
  ReservationDetailComponent
};
//# sourceMappingURL=chunk-VRNJRRCU.js.map
