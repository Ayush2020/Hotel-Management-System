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

// src/app/features/inventory/inventory-detail/inventory-detail.component.ts
var InventoryDetailComponent = class _InventoryDetailComponent {
  static {
    this.\u0275fac = function InventoryDetailComponent_Factory(t) {
      return new (t || _InventoryDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryDetailComponent, selectors: [["app-inventory-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function InventoryDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "Inventory detail works!");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryDetailComponent, { className: "InventoryDetailComponent", filePath: "src\\app\\features\\inventory\\inventory-detail\\inventory-detail.component.ts", lineNumber: 12 });
})();
export {
  InventoryDetailComponent
};
//# sourceMappingURL=chunk-S6AATX4H.js.map
