import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/shared/components/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static {
    this.\u0275fac = function NotFoundComponent_Factory(t) {
      return new (t || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 0, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "error-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/dashboard"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
        \u0275\u0275text(3, "error_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Page Not Found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "The page you are looking for doesn't exist or has been moved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 3)(11, "mat-icon");
        \u0275\u0275text(12, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Return to Dashboard ");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [RouterModule, RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #fafafa;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 90%;\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n  color: #f44336;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin: 0;\n  color: #f44336;\n  line-height: 1;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\np[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=not-found.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\shared\\components\\not-found\\not-found.component.ts", lineNumber: 69 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-OCXP7EB2.js.map
