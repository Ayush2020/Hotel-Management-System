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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username must be at least 3 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 6 characters ");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.hidePassword = true;
    this.isLoading = false;
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    const registerData = __spreadProps(__spreadValues({}, this.registerForm.value), {
      role: ["receptionist"]
    });
    this.authService.register(registerData).subscribe({
      next: () => {
        this.snackBar.open("Registration successful! Please sign in.", "Close", {
          duration: 5e3
        });
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.error("Registration error:", error);
        this.snackBar.open(error.error?.message || "Registration failed. Please try again.", "Close", { duration: 5e3 });
        this.isLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 11, consts: [[1, "register-container"], [1, "register-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", "", "type", "email"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "login-link"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
        \u0275\u0275text(4, "Hotel Management System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-card-subtitle");
        \u0275\u0275text(6, "Create a new account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 2);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
        \u0275\u0275text(11, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 4);
        \u0275\u0275template(13, RegisterComponent_mat_error_13_Template, 2, 0, "mat-error", 5)(14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 6);
        \u0275\u0275template(19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 5)(20, RegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 3)(22, "mat-label");
        \u0275\u0275text(23, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 7);
        \u0275\u0275elementStart(25, "button", 8);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_25_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, RegisterComponent_mat_error_28_Template, 2, 0, "mat-error", 5)(29, RegisterComponent_mat_error_29_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 9)(31, "button", 10);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "mat-card-actions")(34, "p", 11);
        \u0275\u0275text(35, " Already have an account? ");
        \u0275\u0275elementStart(36, "a", 12);
        \u0275\u0275text(37, "Sign in here");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.registerForm.get("username")) == null ? null : tmp_1_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.registerForm.get("username")) == null ? null : tmp_2_0.hasError("minlength"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.hasError("email"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.hasError("minlength"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Creating account..." : "Register", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, RouterModule, RouterLink], styles: ["\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n.register-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 14px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 131 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-MM5RK5LD.js.map
