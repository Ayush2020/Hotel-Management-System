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

// src/app/features/staff/staff-list/staff-list.component.ts
var StaffListComponent = class _StaffListComponent {
  static {
    this.\u0275fac = function StaffListComponent_Factory(t) {
      return new (t || _StaffListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListComponent, selectors: [["app-staff-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function StaffListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "Staff list works!");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListComponent, { className: "StaffListComponent", filePath: "src\\app\\features\\staff\\staff-list\\staff-list.component.ts", lineNumber: 12 });
})();
export {
  StaffListComponent
};
//# sourceMappingURL=chunk-REJAG7ER.js.map
