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
  MatChip,
  MatChipSet,
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
import "./chunk-LEQDTOBB.js";
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
  MatOption
} from "./chunk-U5BHYJH7.js";
import {
  CommonModule,
  CurrencyPipe,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  SlicePipe,
  TitleCasePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/rooms/room-list/room-list.component.ts
var _c0 = () => [10, 25, 50, 100];
function RoomListComponent_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const floor_r1 = ctx.$implicit;
    \u0275\u0275property("value", floor_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", floor_r1, " ");
  }
}
function RoomListComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "mat-spinner", 45);
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Room # ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r2.roomNumber, " ");
  }
}
function RoomListComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Type ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, room_r3.type), " ");
  }
}
function RoomListComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Price ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, room_r4.price), " ");
  }
}
function RoomListComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Capacity ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r5.capacity, " ");
  }
}
function RoomListComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r6.getStatusClass(room_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, room_r6.status), " ");
  }
}
function RoomListComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, " Floor ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r8.floor, " ");
  }
}
function RoomListComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, " Amenities ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_79_mat_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amenity_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amenity_r9, " ");
  }
}
function RoomListComponent_td_79_mat_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", room_r10.amenities.length - 2, " ");
  }
}
function RoomListComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "div", 50)(2, "mat-chip-set");
    \u0275\u0275template(3, RoomListComponent_td_79_mat_chip_3_Template, 2, 1, "mat-chip", 51);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275template(5, RoomListComponent_td_79_mat_chip_5_Template, 2, 1, "mat-chip", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 2, room_r10.amenities, 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", room_r10.amenities.length > 2);
  }
}
function RoomListComponent_th_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, " Actions ");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_td_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 47)(1, "button", 53);
    \u0275\u0275listener("click", function RoomListComponent_td_82_Template_button_click_1_listener() {
      const room_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.viewRoom(room_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function RoomListComponent_td_82_Template_button_click_4_listener() {
      const room_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editRoom(room_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function RoomListComponent_td_82_Template_button_click_7_listener() {
      const room_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.confirmDeleteRoom(room_r12));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function RoomListComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function RoomListComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function RoomListComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 58)(1, "td", 59);
    \u0275\u0275text(2, " No rooms found matching the filter criteria ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r6.displayedColumns.length);
  }
}
var RoomListComponent = class _RoomListComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.rooms = [];
    this.loading = false;
    this.displayedColumns = ["roomNumber", "type", "price", "capacity", "status", "floor", "amenities", "actions"];
    this.floors = [1, 2, 3, 4, 5];
    this.currentPage = 0;
    this.pageSize = 10;
    this.totalRooms = 0;
    this.currentSort = { active: "roomNumber", direction: "asc" };
    this.filterForm = this.fb.group({
      search: [""],
      type: [""],
      status: [""],
      floor: [""]
    });
  }
  ngOnInit() {
    this.loadRooms();
  }
  loadRooms() {
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
    if (filters.type)
      params.type = filters.type;
    if (filters.status)
      params.status = filters.status;
    if (filters.floor)
      params.floor = filters.floor;
    this.http.get(`${baseUrl}/rooms`, { params }).pipe(catchError((error) => {
      console.error("Error loading rooms", error);
      this.snackBar.open("Failed to load rooms. Please try again later.", "Close", { duration: 5e3 });
      return of({ content: [], totalElements: 0 });
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response.content && Array.isArray(response.content)) {
        this.rooms = response.content;
        this.totalRooms = response.totalElements || response.content.length;
      } else if (Array.isArray(response)) {
        this.rooms = response;
        this.totalRooms = response.length;
      } else {
        this.rooms = [];
        this.totalRooms = 0;
      }
    });
  }
  applyFilters() {
    this.currentPage = 0;
    this.loadRooms();
  }
  resetFilters() {
    this.filterForm.reset({
      search: "",
      type: "",
      status: "",
      floor: ""
    });
    this.currentPage = 0;
    this.loadRooms();
  }
  pageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRooms();
  }
  sortData(sort) {
    this.currentSort = sort;
    this.loadRooms();
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
  navigateToAddRoom() {
    this.router.navigate(["/rooms/new"]);
  }
  viewRoom(room) {
    this.router.navigate(["/rooms", room.id]);
  }
  editRoom(room) {
    this.router.navigate(["/rooms", room.id, "edit"]);
  }
  confirmDeleteRoom(room) {
    if (confirm(`Are you sure you want to delete room ${room.roomNumber}?`)) {
      this.deleteRoom(room);
    }
  }
  deleteRoom(room) {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.delete(`${baseUrl}/rooms/${room.id}`).pipe(catchError((error) => {
      console.error("Error deleting room", error);
      this.snackBar.open("Failed to delete room. Please try again later.", "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response !== null) {
        this.snackBar.open(`Room ${room.roomNumber} deleted successfully`, "Close", { duration: 3e3 });
        this.loadRooms();
      }
    });
  }
  static {
    this.\u0275fac = function RoomListComponent_Factory(t) {
      return new (t || _RoomListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["app-room-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 10, consts: [[1, "room-list-container"], [1, "mat-headline-4"], [1, "actions-bar"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-card"], [3, "formGroup"], [1, "filter-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "search", "placeholder", "Room number, description..."], ["matSuffix", ""], ["formControlName", "type"], ["value", ""], ["value", "STANDARD"], ["value", "DELUXE"], ["value", "SUITE"], ["value", "EXECUTIVE"], ["formControlName", "status"], ["value", "AVAILABLE"], ["value", "OCCUPIED"], ["value", "MAINTENANCE"], ["formControlName", "floor"], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-actions"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "table-container", "mat-elevation-z2"], ["class", "loading-overlay", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "matSortChange", "dataSource"], ["matColumnDef", "roomNumber"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "price"], ["matColumnDef", "capacity"], ["matColumnDef", "status"], ["matColumnDef", "floor"], ["matColumnDef", "amenities"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "page", "length", "pageSize", "pageSizeOptions"], [3, "value"], [1, "loading-overlay"], ["diameter", "40"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "status-chip", 3, "ngClass"], ["mat-header-cell", ""], [1, "amenities-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", "no-data"]], template: function RoomListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Room Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function RoomListComponent_Template_button_click_4_listener() {
          return ctx.navigateToAddRoom();
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Add New Room ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card", 4)(9, "mat-card-content")(10, "form", 5)(11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275elementStart(16, "mat-icon", 9);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-form-field", 7)(19, "mat-label");
        \u0275\u0275text(20, "Room Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-select", 10)(22, "mat-option", 11);
        \u0275\u0275text(23, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 12);
        \u0275\u0275text(25, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 13);
        \u0275\u0275text(27, "Deluxe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 14);
        \u0275\u0275text(29, "Suite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 15);
        \u0275\u0275text(31, "Executive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "mat-form-field", 7)(33, "mat-label");
        \u0275\u0275text(34, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-select", 16)(36, "mat-option", 11);
        \u0275\u0275text(37, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 17);
        \u0275\u0275text(39, "Available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 18);
        \u0275\u0275text(41, "Occupied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 19);
        \u0275\u0275text(43, "Maintenance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "mat-form-field", 7)(45, "mat-label");
        \u0275\u0275text(46, "Floor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-select", 20)(48, "mat-option", 11);
        \u0275\u0275text(49, "All Floors");
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, RoomListComponent_mat_option_50_Template, 2, 2, "mat-option", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 22)(52, "button", 23);
        \u0275\u0275listener("click", function RoomListComponent_Template_button_click_52_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(53, "Apply Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 24);
        \u0275\u0275listener("click", function RoomListComponent_Template_button_click_54_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275text(55, "Reset");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(56, "div", 25);
        \u0275\u0275template(57, RoomListComponent_div_57_Template, 2, 0, "div", 26);
        \u0275\u0275elementStart(58, "table", 27);
        \u0275\u0275listener("matSortChange", function RoomListComponent_Template_table_matSortChange_58_listener($event) {
          return ctx.sortData($event);
        });
        \u0275\u0275elementContainerStart(59, 28);
        \u0275\u0275template(60, RoomListComponent_th_60_Template, 2, 0, "th", 29)(61, RoomListComponent_td_61_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(62, 31);
        \u0275\u0275template(63, RoomListComponent_th_63_Template, 2, 0, "th", 29)(64, RoomListComponent_td_64_Template, 3, 3, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(65, 32);
        \u0275\u0275template(66, RoomListComponent_th_66_Template, 2, 0, "th", 29)(67, RoomListComponent_td_67_Template, 3, 3, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(68, 33);
        \u0275\u0275template(69, RoomListComponent_th_69_Template, 2, 0, "th", 29)(70, RoomListComponent_td_70_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(71, 34);
        \u0275\u0275template(72, RoomListComponent_th_72_Template, 2, 0, "th", 29)(73, RoomListComponent_td_73_Template, 4, 4, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(74, 35);
        \u0275\u0275template(75, RoomListComponent_th_75_Template, 2, 0, "th", 29)(76, RoomListComponent_td_76_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(77, 36);
        \u0275\u0275template(78, RoomListComponent_th_78_Template, 2, 0, "th", 37)(79, RoomListComponent_td_79_Template, 6, 6, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(80, 38);
        \u0275\u0275template(81, RoomListComponent_th_81_Template, 2, 0, "th", 37)(82, RoomListComponent_td_82_Template, 10, 0, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(83, RoomListComponent_tr_83_Template, 1, 0, "tr", 39)(84, RoomListComponent_tr_84_Template, 1, 0, "tr", 40)(85, RoomListComponent_tr_85_Template, 3, 1, "tr", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "mat-paginator", 42);
        \u0275\u0275listener("page", function RoomListComponent_Template_mat_paginator_page_86_listener($event) {
          return ctx.pageChange($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.filterForm);
        \u0275\u0275advance(40);
        \u0275\u0275property("ngForOf", ctx.floors);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.rooms);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalRooms)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe, CurrencyPipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatChipsModule, MatChip, MatChipSet, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.room-list-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.filter-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-available[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-occupied[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1565c0;\n}\n.status-maintenance[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.amenities-container[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=room-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "src\\app\\features\\rooms\\room-list\\room-list.component.ts", lineNumber: 297 });
})();
export {
  RoomListComponent
};
//# sourceMappingURL=chunk-OWNWPNUS.js.map
