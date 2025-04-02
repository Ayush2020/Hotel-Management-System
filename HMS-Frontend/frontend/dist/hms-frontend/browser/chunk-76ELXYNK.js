import {
  MatDivider,
  MatDividerModule
} from "./chunk-YNKC65FH.js";
import {
  MatChip,
  MatChipSet,
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
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-ZKLSL4BO.js";
import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  HttpClient,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  TitleCasePipe,
  catchError,
  finalize,
  inject,
  of,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/rooms/room-detail/room-detail.component.ts
function RoomDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function RoomDetailComponent_mat_card_7_img_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.room.images[0], \u0275\u0275sanitizeUrl);
  }
}
function RoomDetailComponent_mat_card_7_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon");
    \u0275\u0275text(2, "hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No Image Available");
    \u0275\u0275elementEnd()();
  }
}
function RoomDetailComponent_mat_card_7_mat_chip_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amenity_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amenity_r3, " ");
  }
}
function RoomDetailComponent_mat_card_7_mat_chip_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 30);
    \u0275\u0275text(1, " No amenities listed ");
    \u0275\u0275elementEnd();
  }
}
function RoomDetailComponent_mat_card_7_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function RoomDetailComponent_mat_card_7_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bookRoom());
    });
    \u0275\u0275text(1, " Book Room ");
    \u0275\u0275elementEnd();
  }
}
function RoomDetailComponent_mat_card_7_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function RoomDetailComponent_mat_card_7_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewReservation());
    });
    \u0275\u0275text(1, " View Reservation ");
    \u0275\u0275elementEnd();
  }
}
function RoomDetailComponent_mat_card_7_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function RoomDetailComponent_mat_card_7_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsAvailable());
    });
    \u0275\u0275text(1, " Mark as Available ");
    \u0275\u0275elementEnd();
  }
}
function RoomDetailComponent_mat_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 12);
    \u0275\u0275listener("click", function RoomDetailComponent_mat_card_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editRoom());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function RoomDetailComponent_mat_card_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteRoom());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275template(18, RoomDetailComponent_mat_card_7_img_18_Template, 1, 1, "img", 15)(19, RoomDetailComponent_mat_card_7_ng_template_19_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-card-content")(22, "div", 16)(23, "div", 17)(24, "div", 18);
    \u0275\u0275text(25, "Floor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "div", 18);
    \u0275\u0275text(30, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
    \u0275\u0275text(36, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(39, "mat-divider", 20);
    \u0275\u0275elementStart(40, "div", 21)(41, "h3");
    \u0275\u0275text(42, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "mat-divider", 20);
    \u0275\u0275elementStart(46, "div", 22)(47, "h3");
    \u0275\u0275text(48, "Amenities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-chip-set");
    \u0275\u0275template(50, RoomDetailComponent_mat_card_7_mat_chip_50_Template, 2, 1, "mat-chip", 23)(51, RoomDetailComponent_mat_card_7_mat_chip_51_Template, 2, 0, "mat-chip", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "mat-card-actions");
    \u0275\u0275template(53, RoomDetailComponent_mat_card_7_button_53_Template, 2, 0, "button", 25)(54, RoomDetailComponent_mat_card_7_button_54_Template, 2, 0, "button", 26)(55, RoomDetailComponent_mat_card_7_button_55_Template, 2, 0, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const placeholderImage_r7 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Room ", ctx_r1.room.roomNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 16, ctx_r1.room.type), " Room");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.room.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 18, ctx_r1.room.status), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.room.images && ctx_r1.room.images.length > 0)("ngIfElse", placeholderImage_r7);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.room.floor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, ctx_r1.room.price));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.room.capacity, " ", ctx_r1.room.capacity > 1 ? "People" : "Person", "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.room.description || "No description available.");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.room.amenities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.room.amenities || ctx_r1.room.amenities.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.room.status === "AVAILABLE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.room.status === "OCCUPIED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.room.status === "MAINTENANCE");
  }
}
function RoomDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h2");
    \u0275\u0275text(2, "Room Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The room you are looking for could not be found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function RoomDetailComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Go Back to Rooms");
    \u0275\u0275elementEnd()();
  }
}
var RoomDetailComponent = class _RoomDetailComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.location = inject(Location);
    this.snackBar = inject(MatSnackBar);
    this.room = null;
    this.loading = false;
    this.notFound = false;
  }
  ngOnInit() {
    this.loading = true;
    this.route.paramMap.pipe(switchMap((params) => {
      const roomId = params.get("id");
      if (!roomId) {
        return of(null);
      }
      const baseUrl = environment.apiUrl;
      return this.http.get(`${baseUrl}/rooms/${roomId}`).pipe(catchError((error) => {
        console.error("Error loading room details", error);
        if (error.status === 404) {
          this.notFound = true;
        } else {
          this.snackBar.open("Failed to load room details. Please try again later.", "Close", { duration: 5e3 });
        }
        return of(null);
      }));
    }), finalize(() => this.loading = false)).subscribe((room) => {
      this.room = room;
    });
  }
  getStatusClass(status) {
    switch (status) {
      case "AVAILABLE":
        return "status-available";
      case "OCCUPIED":
        return "status-occupied";
      case "MAINTENANCE":
        return "status-maintenance";
      default:
        return "";
    }
  }
  goBack() {
    this.location.back();
  }
  editRoom() {
    if (this.room) {
      this.router.navigate(["/rooms", this.room.id, "edit"]);
    }
  }
  confirmDeleteRoom() {
    if (this.room && confirm(`Are you sure you want to delete room ${this.room.roomNumber}?`)) {
      this.deleteRoom();
    }
  }
  deleteRoom() {
    if (!this.room)
      return;
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.delete(`${baseUrl}/rooms/${this.room.id}`).pipe(catchError((error) => {
      console.error("Error deleting room", error);
      this.snackBar.open("Failed to delete room. Please try again later.", "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response !== null) {
        this.snackBar.open(`Room ${this.room?.roomNumber} deleted successfully`, "Close", { duration: 3e3 });
        this.router.navigate(["/rooms"]);
      }
    });
  }
  bookRoom() {
    if (this.room) {
      this.router.navigate(["/reservations/new"], {
        queryParams: { roomId: this.room.id }
      });
    }
  }
  viewReservation() {
    this.snackBar.open("This feature is not implemented yet.", "Close", { duration: 3e3 });
  }
  markAsAvailable() {
    if (!this.room)
      return;
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.patch(`${baseUrl}/rooms/${this.room.id}`, { status: "AVAILABLE" }).pipe(catchError((error) => {
      console.error("Error updating room status", error);
      this.snackBar.open("Failed to update room status. Please try again later.", "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response !== null) {
        this.snackBar.open(`Room ${this.room?.roomNumber} is now available`, "Close", { duration: 3e3 });
        this.ngOnInit();
      }
    });
  }
  static {
    this.\u0275fac = function RoomDetailComponent_Factory(t) {
      return new (t || _RoomDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomDetailComponent, selectors: [["app-room-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["placeholderImage", ""], [1, "room-detail-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "back-button"], ["mat-button", "", 3, "click"], ["class", "room-card", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], [1, "loading-overlay"], ["diameter", "40"], [1, "room-card"], [1, "header-actions"], [1, "status-chip", 3, "ngClass"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit Room", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete Room", 3, "click"], [1, "room-image-container"], ["alt", "Room image", "class", "room-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "room-info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "section-divider"], [1, "room-description"], [1, "room-amenities"], [4, "ngFor", "ngForOf"], ["disabled", "", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["alt", "Room image", 1, "room-image", 3, "src"], [1, "placeholder-image"], ["disabled", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "not-found"]], template: function RoomDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, RoomDetailComponent_div_1_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function RoomDetailComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back to Rooms ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, RoomDetailComponent_mat_card_7_Template, 56, 22, "mat-card", 5)(8, RoomDetailComponent_div_8_Template, 7, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.room);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notFound);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatChipsModule, MatChip, MatChipSet, MatDividerModule, MatDivider, MatTooltipModule, MatTooltip, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.room-detail-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.room-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.status-chip[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-available[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-occupied[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n}\n.status-maintenance[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.room-image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.room-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.placeholder-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.38);\n}\n.placeholder-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n}\n.room-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.info-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 4px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.section-divider[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.room-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .room-amenities[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.room-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.87);\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=room-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomDetailComponent, { className: "RoomDetailComponent", filePath: "src\\app\\features\\rooms\\room-detail\\room-detail.component.ts", lineNumber: 307 });
})();
export {
  RoomDetailComponent
};
//# sourceMappingURL=chunk-76ELXYNK.js.map
