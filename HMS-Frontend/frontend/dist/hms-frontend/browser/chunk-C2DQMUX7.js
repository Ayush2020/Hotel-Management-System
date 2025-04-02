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
  DatePipe,
  HttpClient,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/guests/guest-list/guest-list.component.ts
var _c0 = () => [10, 25, 50, 100];
function GuestListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, " ID ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guest_r1.id, " ");
  }
}
function GuestListComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, " Name ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_41_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 37);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275template(2, GuestListComponent_td_41_mat_icon_2_Template, 2, 0, "mat-icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", guest_r2.firstName, " ", guest_r2.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", guest_r2.vip);
  }
}
function GuestListComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, " Email ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guest_r3.email || "Not provided", " ");
  }
}
function GuestListComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, " Phone ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guest_r4.phone || "Not provided", " ");
  }
}
function GuestListComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, " Created At ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guest_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, guest_r5.createdAt), " ");
  }
}
function GuestListComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, " Actions ");
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 35)(1, "button", 39);
    \u0275\u0275listener("click", function GuestListComponent_td_53_Template_button_click_1_listener() {
      const guest_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.viewGuest(guest_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function GuestListComponent_td_53_Template_button_click_4_listener() {
      const guest_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editGuest(guest_r7));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function GuestListComponent_td_53_Template_button_click_7_listener() {
      const guest_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.confirmDeleteGuest(guest_r7));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function GuestListComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 42);
  }
}
function GuestListComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43);
    \u0275\u0275listener("click", function GuestListComponent_tr_55_Template_tr_click_0_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.viewGuest(row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function GuestListComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2, " No guests found matching the filter criteria ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r7.displayedColumns.length);
  }
}
var GuestListComponent = class _GuestListComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.guests = [];
    this.loading = false;
    this.displayedColumns = ["id", "name", "email", "phone", "createdAt", "actions"];
    this.currentPage = 0;
    this.pageSize = 10;
    this.totalGuests = 0;
    this.currentSort = { active: "id", direction: "desc" };
    this.filterForm = this.fb.group({
      search: [""],
      vip: [""]
    });
  }
  ngOnInit() {
    this.loadGuests();
  }
  loadGuests() {
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
    if (filters.vip !== "")
      params.vip = filters.vip;
    this.http.get(`${baseUrl}/guests`, { params }).pipe(catchError((error) => {
      console.error("Error loading guests", error);
      this.snackBar.open("Failed to load guests. Please try again later.", "Close", { duration: 5e3 });
      return of({ content: [], totalElements: 0 });
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response.content && Array.isArray(response.content)) {
        this.guests = response.content;
        this.totalGuests = response.totalElements || response.content.length;
      } else if (Array.isArray(response)) {
        this.guests = response;
        this.totalGuests = response.length;
      } else {
        this.guests = [];
        this.totalGuests = 0;
      }
    });
  }
  applyFilters() {
    this.currentPage = 0;
    this.loadGuests();
  }
  resetFilters() {
    this.filterForm.reset({
      search: "",
      vip: ""
    });
    this.currentPage = 0;
    this.loadGuests();
  }
  pageChange(event2) {
    this.currentPage = event2.pageIndex;
    this.pageSize = event2.pageSize;
    this.loadGuests();
  }
  sortData(sort) {
    this.currentSort = sort;
    this.loadGuests();
  }
  navigateToAddGuest() {
    this.router.navigate(["/guests/new"]);
  }
  viewGuest(guest) {
    this.router.navigate(["/guests", guest.id]);
  }
  editGuest(guest) {
    event?.stopPropagation();
    this.router.navigate(["/guests", guest.id, "edit"]);
  }
  confirmDeleteGuest(guest) {
    event?.stopPropagation();
    if (confirm(`Are you sure you want to delete guest ${guest.firstName} ${guest.lastName}?`)) {
      this.deleteGuest(guest);
    }
  }
  deleteGuest(guest) {
    this.loading = true;
    const baseUrl = environment.apiUrl;
    this.http.delete(`${baseUrl}/guests/${guest.id}`).pipe(catchError((error) => {
      console.error("Error deleting guest", error);
      this.snackBar.open("Failed to delete guest. Please try again later.", "Close", { duration: 5e3 });
      return of(null);
    }), finalize(() => this.loading = false)).subscribe((response) => {
      if (response !== null) {
        this.snackBar.open(`Guest ${guest.firstName} ${guest.lastName} deleted successfully`, "Close", { duration: 3e3 });
        this.loadGuests();
      }
    });
  }
  static {
    this.\u0275fac = function GuestListComponent_Factory(t) {
      return new (t || _GuestListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestListComponent, selectors: [["app-guest-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 11, consts: [[1, "guest-list-container"], [1, "mat-headline-4"], [1, "actions-bar"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-card"], [3, "formGroup"], [1, "filter-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "search", "placeholder", "Name, email, phone..."], ["matSuffix", ""], ["formControlName", "vip"], ["value", ""], [3, "value"], [1, "filter-actions"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "table-container", "mat-elevation-z2"], ["class", "loading-overlay", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "matSortChange", "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "guest-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "page", "length", "pageSize", "pageSizeOptions"], [1, "loading-overlay"], ["diameter", "40"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["color", "warn", "class", "vip-icon", 4, "ngIf"], ["color", "warn", 1, "vip-icon"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "View Guest", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit Guest", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete Guest", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "guest-row", 3, "click"], [1, "mat-row"], [1, "mat-cell", "no-data"]], template: function GuestListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Guest Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function GuestListComponent_Template_button_click_4_listener() {
          return ctx.navigateToAddGuest();
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Add New Guest ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card", 4)(9, "mat-card-content")(10, "form", 5)(11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275elementStart(16, "mat-icon", 9);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-form-field", 7)(19, "mat-label");
        \u0275\u0275text(20, "VIP Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-select", 10)(22, "mat-option", 11);
        \u0275\u0275text(23, "All Guests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 12);
        \u0275\u0275text(25, "VIP Guests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 12);
        \u0275\u0275text(27, "Regular Guests");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "button", 14);
        \u0275\u0275listener("click", function GuestListComponent_Template_button_click_29_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(30, "Apply Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 15);
        \u0275\u0275listener("click", function GuestListComponent_Template_button_click_31_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275text(32, "Reset");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "div", 16);
        \u0275\u0275template(34, GuestListComponent_div_34_Template, 2, 0, "div", 17);
        \u0275\u0275elementStart(35, "table", 18);
        \u0275\u0275listener("matSortChange", function GuestListComponent_Template_table_matSortChange_35_listener($event) {
          return ctx.sortData($event);
        });
        \u0275\u0275elementContainerStart(36, 19);
        \u0275\u0275template(37, GuestListComponent_th_37_Template, 2, 0, "th", 20)(38, GuestListComponent_td_38_Template, 2, 1, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 22);
        \u0275\u0275template(40, GuestListComponent_th_40_Template, 2, 0, "th", 20)(41, GuestListComponent_td_41_Template, 3, 3, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 23);
        \u0275\u0275template(43, GuestListComponent_th_43_Template, 2, 0, "th", 20)(44, GuestListComponent_td_44_Template, 2, 1, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 24);
        \u0275\u0275template(46, GuestListComponent_th_46_Template, 2, 0, "th", 20)(47, GuestListComponent_td_47_Template, 2, 1, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(48, 25);
        \u0275\u0275template(49, GuestListComponent_th_49_Template, 2, 0, "th", 20)(50, GuestListComponent_td_50_Template, 3, 3, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(51, 26);
        \u0275\u0275template(52, GuestListComponent_th_52_Template, 2, 0, "th", 27)(53, GuestListComponent_td_53_Template, 10, 0, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(54, GuestListComponent_tr_54_Template, 1, 0, "tr", 28)(55, GuestListComponent_tr_55_Template, 1, 0, "tr", 29)(56, GuestListComponent_tr_56_Template, 3, 1, "tr", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-paginator", 31);
        \u0275\u0275listener("page", function GuestListComponent_Template_mat_paginator_page_57_listener($event) {
          return ctx.pageChange($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.filterForm);
        \u0275\u0275advance(14);
        \u0275\u0275property("value", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", false);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.guests);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalGuests)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c0));
      }
    }, dependencies: [
      CommonModule,
      NgIf,
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
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatSort,
      MatSortHeader,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatBadgeModule
    ], styles: ["\n\n.guest-list-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.filter-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n}\n.vip-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.guest-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.guest-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=guest-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestListComponent, { className: "GuestListComponent", filePath: "src\\app\\features\\guests\\guest-list\\guest-list.component.ts", lineNumber: 243 });
})();
export {
  GuestListComponent
};
//# sourceMappingURL=chunk-C2DQMUX7.js.map
