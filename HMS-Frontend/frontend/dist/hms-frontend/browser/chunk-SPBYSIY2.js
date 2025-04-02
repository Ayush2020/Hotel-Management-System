import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-72VLOWO4.js";
import {
  InvoiceService
} from "./chunk-T233WLZ4.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-YNKC65FH.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-X5VU3L5S.js";
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
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  inject,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(t) {
      return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 6, consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "p");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-dialog-actions", 1)(6, "button", 2);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.message);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.cancelButtonText || "Cancel", " ");
        \u0275\u0275advance();
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.confirmButtonText || "Confirm", " ");
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatButtonModule,
      MatButton
    ], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\shared\\components\\confirm-dialog\\confirm-dialog.component.ts", lineNumber: 41 });
})();

// src/app/features/invoices/invoice-detail/invoice-detail.component.ts
var _c0 = (a0) => ["/invoices", a0, "edit"];
function InvoiceDetailComponent_div_0_th_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_td_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.description);
  }
}
function InvoiceDetailComponent_div_0_td_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
    \u0275\u0275text(1, "Total");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_th_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Quantity");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_td_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.quantity);
  }
}
function InvoiceDetailComponent_div_0_td_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 38);
  }
}
function InvoiceDetailComponent_div_0_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Unit Price");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_td_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r5.unitPrice));
  }
}
function InvoiceDetailComponent_div_0_td_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 38);
  }
}
function InvoiceDetailComponent_div_0_th_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_td_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r6.amount));
  }
}
function InvoiceDetailComponent_div_0_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.invoice.totalAmount));
  }
}
function InvoiceDetailComponent_div_0_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function InvoiceDetailComponent_div_0_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function InvoiceDetailComponent_div_0_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function InvoiceDetailComponent_div_0_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Amount Paid:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.invoice.amountPaid));
  }
}
function InvoiceDetailComponent_div_0_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span");
    \u0275\u0275text(2, "Balance Due:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.invoice.balanceDue));
  }
}
function InvoiceDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7)(9, "mat-icon");
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printInvoice());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Print ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 9);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteInvoice());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Delete ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "mat-card")(22, "mat-card-content")(23, "div", 11)(24, "div", 12)(25, "h2");
    \u0275\u0275text(26, "Hotel Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "123 Hotel Street");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "City, State ZIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Phone: (123) 456-7890");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, "Email: info@hotel.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 13)(36, "p")(37, "strong");
    \u0275\u0275text(38, "Invoice #:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p")(41, "strong");
    \u0275\u0275text(42, "Issue Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p")(46, "strong");
    \u0275\u0275text(47, "Due Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(50, "mat-divider");
    \u0275\u0275elementStart(51, "div", 14)(52, "div", 15)(53, "h3");
    \u0275\u0275text(54, "Bill To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p")(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 16)(65, "h3");
    \u0275\u0275text(66, "Reservation Details:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p")(68, "strong");
    \u0275\u0275text(69, "Room:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p")(72, "strong");
    \u0275\u0275text(73, "Check-in:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p")(77, "strong");
    \u0275\u0275text(78, "Check-out:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p")(82, "strong");
    \u0275\u0275text(83, "Stay Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 17)(86, "h3");
    \u0275\u0275text(87, "Invoice Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "table", 18);
    \u0275\u0275elementContainerStart(89, 19);
    \u0275\u0275template(90, InvoiceDetailComponent_div_0_th_90_Template, 2, 0, "th", 20)(91, InvoiceDetailComponent_div_0_td_91_Template, 2, 1, "td", 21)(92, InvoiceDetailComponent_div_0_td_92_Template, 2, 0, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(93, 23);
    \u0275\u0275template(94, InvoiceDetailComponent_div_0_th_94_Template, 2, 0, "th", 20)(95, InvoiceDetailComponent_div_0_td_95_Template, 2, 1, "td", 21)(96, InvoiceDetailComponent_div_0_td_96_Template, 1, 0, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(97, 24);
    \u0275\u0275template(98, InvoiceDetailComponent_div_0_th_98_Template, 2, 0, "th", 20)(99, InvoiceDetailComponent_div_0_td_99_Template, 3, 3, "td", 21)(100, InvoiceDetailComponent_div_0_td_100_Template, 1, 0, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(101, 25);
    \u0275\u0275template(102, InvoiceDetailComponent_div_0_th_102_Template, 2, 0, "th", 20)(103, InvoiceDetailComponent_div_0_td_103_Template, 3, 3, "td", 21)(104, InvoiceDetailComponent_div_0_td_104_Template, 3, 3, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(105, InvoiceDetailComponent_div_0_tr_105_Template, 1, 0, "tr", 26)(106, InvoiceDetailComponent_div_0_tr_106_Template, 1, 0, "tr", 27)(107, InvoiceDetailComponent_div_0_tr_107_Template, 1, 0, "tr", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 29)(109, "div", 30)(110, "span");
    \u0275\u0275text(111, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span");
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 30)(116, "span");
    \u0275\u0275text(117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 31)(122, "span");
    \u0275\u0275text(123, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span");
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(127, InvoiceDetailComponent_div_0_div_127_Template, 6, 3, "div", 32)(128, InvoiceDetailComponent_div_0_div_128_Template, 6, 3, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 34)(130, "h3");
    \u0275\u0275text(131, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "p");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 35)(135, "h3");
    \u0275\u0275text(136, "Payment Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "p");
    \u0275\u0275text(138, "Credit Card, Cash, Bank Transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "p");
    \u0275\u0275text(140, "Account details: Bank Account #1234567890");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Invoice #", ctx_r1.invoice.invoiceNumber, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.invoice.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.invoice.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(44, _c0, ctx_r1.invoice.id));
    \u0275\u0275advance(31);
    \u0275\u0275textInterpolate1(" ", ctx_r1.invoice.invoiceNumber, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 26, ctx_r1.invoice.issueDate, "mediumDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 29, ctx_r1.invoice.dueDate, "mediumDate"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.invoice.guestName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invoice.guestEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invoice.guestPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invoice.guestAddress);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.invoice.roomNumber, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(75, 32, ctx_r1.invoice.checkInDate, "mediumDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(80, 35, ctx_r1.invoice.checkOutDate, "mediumDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.invoice.stayDuration, " nights");
    \u0275\u0275advance(4);
    \u0275\u0275property("dataSource", ctx_r1.invoice.items);
    \u0275\u0275advance(17);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matFooterRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 38, ctx_r1.invoice.subtotal));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Tax (", ctx_r1.invoice.taxRate, "%):");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 40, ctx_r1.invoice.taxAmount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 42, ctx_r1.invoice.totalAmount));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.invoice.amountPaid > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.balanceDue > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.invoice.notes || "No notes available");
  }
}
function InvoiceDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Loading invoice... ");
    \u0275\u0275elementEnd();
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.invoiceService = inject(InvoiceService);
    this.dialog = inject(MatDialog);
    this.invoice = null;
    this.displayedColumns = ["description", "quantity", "unitPrice", "amount"];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.loadInvoice(id);
      }
    });
  }
  loadInvoice(id) {
    this.invoiceService.getInvoiceById(id).subscribe((invoice) => {
      this.invoice = invoice;
    }, (error) => {
      console.error("Error loading invoice:", error);
    });
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
  printInvoice() {
    window.print();
  }
  deleteInvoice() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "350px",
      data: {
        title: "Delete Invoice",
        message: "Are you sure you want to delete this invoice? This action cannot be undone."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.invoice && this.invoice.id) {
        this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
          this.router.navigate(["/invoices"]);
        }, (error) => {
          console.error("Error deleting invoice:", error);
        });
      }
    });
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(t) {
      return new (t || _InvoiceDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "container"], [1, "header"], [1, "title"], [1, "status-badge", 3, "ngClass"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "content"], [1, "invoice-header"], [1, "hotel-info"], [1, "invoice-info"], [1, "billing-info"], [1, "guest-info"], [1, "reservation-info"], [1, "invoice-items"], ["mat-table", "", 1, "items-table", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "unitPrice"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "payment-summary"], [1, "summary-row"], [1, "summary-row", "total"], ["class", "summary-row", 4, "ngIf"], ["class", "summary-row balance", 4, "ngIf"], [1, "notes"], [1, "payment-info"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "summary-row", "balance"], [1, "loading"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InvoiceDetailComponent_div_0_Template, 141, 46, "div", 0)(1, InvoiceDetailComponent_div_1_Template, 2, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.invoice);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.invoice);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, CurrencyPipe, DatePipe, RouterModule, RouterLink, MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatDividerModule, MatDivider, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatDialogModule], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 4px;\n  margin-left: 10px;\n  font-weight: bold;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.content[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.invoice-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.billing-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.guest-info[_ngcontent-%COMP%], .reservation-info[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.invoice-items[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.items-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.payment-summary[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-left: auto;\n  margin-top: 20px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n.total[_ngcontent-%COMP%], .balance[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  margin-top: 5px;\n}\n.notes[_ngcontent-%COMP%], .payment-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.status-unpaid[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.status-partially-paid[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.mat-column-description[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.mat-column-quantity[_ngcontent-%COMP%], .mat-column-unitPrice[_ngcontent-%COMP%], .mat-column-amount[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "src\\app\\features\\invoices\\invoice-detail\\invoice-detail.component.ts", lineNumber: 248 });
})();
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=chunk-SPBYSIY2.js.map
