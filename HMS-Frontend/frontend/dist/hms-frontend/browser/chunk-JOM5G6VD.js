import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  BehaviorSubject,
  HttpClient,
  Router,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2DAULNLE.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.TOKEN_KEY = "auth_token";
    this.USER_KEY = "auth_user";
    this.API_URL = `${environment.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject(this.getUserFromStorage());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  login(loginRequest) {
    return this.http.post(`${this.API_URL}/signin`, loginRequest).pipe(tap((response) => {
      this.setToken(response.token);
      const user = {
        id: response.id,
        username: response.username,
        email: response.email,
        roles: response.roles
      };
      this.setUser(user);
      this.currentUserSubject.next(user);
    }));
  }
  register(registerRequest) {
    return this.http.post(`${this.API_URL}/signup`, registerRequest);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getUserRoles() {
    const user = this.getUserFromStorage();
    return user?.roles || [];
  }
  hasRole(role) {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  setUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  getUserFromStorage() {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-JOM5G6VD.js.map
