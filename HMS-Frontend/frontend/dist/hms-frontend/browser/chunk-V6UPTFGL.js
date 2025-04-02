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

// src/app/features/inventory/inventory-form/inventory-form.component.ts
var InventoryFormComponent = class _InventoryFormComponent {
  static {
    this.\u0275fac = function InventoryFormComponent_Factory(t) {
      return new (t || _InventoryFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryFormComponent, selectors: [["app-inventory-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function InventoryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "Inventory form works!");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryFormComponent, { className: "InventoryFormComponent", filePath: "src\\app\\features\\inventory\\inventory-form\\inventory-form.component.ts", lineNumber: 12 });
})();
export {
  InventoryFormComponent
};
//# sourceMappingURL=chunk-V6UPTFGL.js.map
