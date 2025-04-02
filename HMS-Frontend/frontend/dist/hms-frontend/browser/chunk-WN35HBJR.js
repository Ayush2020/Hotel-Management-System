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

// src/app/features/staff/staff-detail/staff-detail.component.ts
var StaffDetailComponent = class _StaffDetailComponent {
  static {
    this.\u0275fac = function StaffDetailComponent_Factory(t) {
      return new (t || _StaffDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDetailComponent, selectors: [["app-staff-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function StaffDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "Staff detail works!");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDetailComponent, { className: "StaffDetailComponent", filePath: "src\\app\\features\\staff\\staff-detail\\staff-detail.component.ts", lineNumber: 12 });
})();
export {
  StaffDetailComponent
};
//# sourceMappingURL=chunk-WN35HBJR.js.map
