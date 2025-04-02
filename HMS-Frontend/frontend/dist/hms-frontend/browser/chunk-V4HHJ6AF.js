import {
  InvoiceService
} from "./chunk-T233WLZ4.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-T7YIB5D2.js";
import "./chunk-MZ5CGW3Y.js";
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
import "./chunk-LEQDTOBB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WL3U4NOB.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-PZ47AC3Q.js";
import "./chunk-W6NUDNO3.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-ZKLSL4BO.js";
import "./chunk-THZPQC5N.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass,
  RouterLink,
  RouterModule,
  debounceTime,
  distinctUntilChanged,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/invoices/invoice-list/invoice-list.component.ts
var _c0 = () => [5, 10, 25, 50];
var _c1 = (a0) => [a0];
var _c2 = (a0) => [a0, "edit"];
function InvoiceListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Invoice #");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r1.invoiceNumber);
  }
}
function InvoiceListComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Guest");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r2.guestName);
  }
}
function InvoiceListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Room");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r3.roomNumber);
  }
}
function InvoiceListComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Issue Date");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, invoice_r4.issueDate, "mediumDate"));
  }
}
function InvoiceListComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Due Date");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, invoice_r5.dueDate, "mediumDate"));
  }
}
function InvoiceListComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, invoice_r6.totalAmount));
  }
}
function InvoiceListComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r7 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r7.getStatusClass(invoice_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", invoice_r7.status, " ");
  }
}
function InvoiceListComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24)(1, "button", 27)(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 28)(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, invoice_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, invoice_r9.id));
  }
}
function InvoiceListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function InvoiceListComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, row_r10.id));
  }
}
var InvoiceListComponent = class _InvoiceListComponent {
  constructor(invoiceService) {
    this.invoiceService = invoiceService;
    this.invoices = [];
    this.displayedColumns = ["invoiceNumber", "guestName", "roomNumber", "issueDate", "dueDate", "totalAmount", "status", "actions"];
    this.totalInvoices = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.searchControl = new FormControl("");
  }
  ngOnInit() {
    this.loadInvoices();
    this.searchControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((searchTerm) => {
      this.pageIndex = 0;
      this.loadInvoices();
    });
  }
  loadInvoices() {
    const searchTerm = this.searchControl.value || "";
    this.invoiceService.getInvoices(this.pageIndex, this.pageSize, searchTerm).subscribe((result) => {
      this.invoices = result.invoices;
      this.totalInvoices = result.total;
    });
  }
  handlePageEvent(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadInvoices();
  }
  sortData(sort) {
    this.loadInvoices();
  }
  getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "paid":
        return "status-paid";
      case "unpaid":
        return "status-unpaid";
      case "partially paid":
        return "status-partially-paid";
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function InvoiceListComponent_Factory(t) {
      return new (t || _InvoiceListComponent)(\u0275\u0275directiveInject(InvoiceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceListComponent, selectors: [["app-invoice-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 8, consts: [[1, "container"], [1, "header"], ["mat-raised-button", "", "color", "primary", "routerLink", "new"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Search invoices...", 3, "formControl"], ["matSuffix", ""], [1, "mat-elevation-z8", "table-container"], ["mat-table", "", "matSort", "", 3, "matSortChange", "dataSource"], ["matColumnDef", "invoiceNumber"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "guestName"], ["matColumnDef", "roomNumber"], ["matColumnDef", "issueDate"], ["matColumnDef", "dueDate"], ["matColumnDef", "totalAmount"], ["matColumnDef", "status"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable-row", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", ""], ["mat-icon-button", "", "matTooltip", "View", 3, "routerLink"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable-row", 3, "routerLink"]], template: function InvoiceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "mat-icon");
        \u0275\u0275text(6, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Create Invoice ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card")(9, "mat-card-content")(10, "mat-form-field", 3)(11, "mat-label");
        \u0275\u0275text(12, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 4);
        \u0275\u0275elementStart(14, "mat-icon", 5);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 6)(17, "table", 7);
        \u0275\u0275listener("matSortChange", function InvoiceListComponent_Template_table_matSortChange_17_listener($event) {
          return ctx.sortData($event);
        });
        \u0275\u0275elementContainerStart(18, 8);
        \u0275\u0275template(19, InvoiceListComponent_th_19_Template, 2, 0, "th", 9)(20, InvoiceListComponent_td_20_Template, 2, 1, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 11);
        \u0275\u0275template(22, InvoiceListComponent_th_22_Template, 2, 0, "th", 9)(23, InvoiceListComponent_td_23_Template, 2, 1, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 12);
        \u0275\u0275template(25, InvoiceListComponent_th_25_Template, 2, 0, "th", 9)(26, InvoiceListComponent_td_26_Template, 2, 1, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 13);
        \u0275\u0275template(28, InvoiceListComponent_th_28_Template, 2, 0, "th", 9)(29, InvoiceListComponent_td_29_Template, 3, 4, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 14);
        \u0275\u0275template(31, InvoiceListComponent_th_31_Template, 2, 0, "th", 9)(32, InvoiceListComponent_td_32_Template, 3, 4, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 15);
        \u0275\u0275template(34, InvoiceListComponent_th_34_Template, 2, 0, "th", 9)(35, InvoiceListComponent_td_35_Template, 3, 3, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 16);
        \u0275\u0275template(37, InvoiceListComponent_th_37_Template, 2, 0, "th", 9)(38, InvoiceListComponent_td_38_Template, 2, 2, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 18);
        \u0275\u0275template(40, InvoiceListComponent_th_40_Template, 2, 0, "th", 19)(41, InvoiceListComponent_td_41_Template, 7, 6, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(42, InvoiceListComponent_tr_42_Template, 1, 0, "tr", 20)(43, InvoiceListComponent_tr_43_Template, 1, 3, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-paginator", 22);
        \u0275\u0275listener("page", function InvoiceListComponent_Template_mat_paginator_page_44_listener($event) {
          return ctx.handlePageEvent($event);
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formControl", ctx.searchControl);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.invoices);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.totalInvoices)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c0));
      }
    }, dependencies: [CommonModule, NgClass, CurrencyPipe, DatePipe, RouterModule, RouterLink, MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.status-paid[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n.status-unpaid[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.status-partially-paid[_ngcontent-%COMP%] {\n  color: orange;\n  font-weight: bold;\n}\n/*# sourceMappingURL=invoice-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceListComponent, { className: "InvoiceListComponent", filePath: "src\\app\\features\\invoices\\invoice-list\\invoice-list.component.ts", lineNumber: 166 });
})();
export {
  InvoiceListComponent
};
//# sourceMappingURL=chunk-V4HHJ6AF.js.map
