import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/inventory/inventory-list/inventory-list.component.ts
var InventoryListComponent = class _InventoryListComponent {
  static {
    this.\u0275fac = function InventoryListComponent_Factory(t) {
      return new (t || _InventoryListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryListComponent, selectors: [["app-inventory-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function InventoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "Inventory list works!");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryListComponent, { className: "InventoryListComponent", filePath: "src\\app\\features\\inventory\\inventory-list\\inventory-list.component.ts", lineNumber: 12 });
})();
export {
  InventoryListComponent
};
//# sourceMappingURL=chunk-7FUMGV6W.js.map
