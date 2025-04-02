import {
  AuthService
} from "./chunk-JOM5G6VD.js";
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
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-PZ47AC3Q.js";
import "./chunk-W6NUDNO3.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
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
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.snackBar = inject(MatSnackBar);
    this.hidePassword = true;
    this.isLoading = false;
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
        this.router.navigate([returnUrl]);
      },
      error: (error) => {
        console.error("Login error:", error);
        this.snackBar.open(error.error?.message || "Invalid username or password", "Close", { duration: 5e3 });
        this.isLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 7, consts: [[1, "login-container"], [1, "login-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "register-link"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
        \u0275\u0275text(4, "Hotel Management System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-card-subtitle");
        \u0275\u0275text(6, "Sign in to your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 2);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
        \u0275\u0275text(11, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 4);
        \u0275\u0275template(13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "mat-label");
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 6);
        \u0275\u0275elementStart(18, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_18_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, LoginComponent_mat_error_21_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "button", 9);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "mat-card-actions")(26, "p", 10);
        \u0275\u0275text(27, " Don't have an account? ");
        \u0275\u0275elementStart(28, "a", 11);
        \u0275\u0275text(29, "Register here");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_4_0;
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.hasError("required"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Signing in..." : "Sign In", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, RouterModule, RouterLink], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n.login-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 14px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 114 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-AGPO3NO6.js.map
