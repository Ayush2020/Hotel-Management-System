import {
  AuthService
} from "./chunk-JOM5G6VD.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-ZKLSL4BO.js";
import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-U5BHYJH7.js";
import {
  AsyncPipe,
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  Router,
  catchError,
  forkJoin,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_mat_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 10)(1, "mat-card-content")(2, "mat-icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", stat_r1.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function DashboardComponent_mat_card_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 15);
    \u0275\u0275listener("click", function DashboardComponent_mat_card_14_Template_mat_card_click_0_listener() {
      const action_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.navigateTo(action_r3.route));
    });
    \u0275\u0275elementStart(1, "mat-card-content")(2, "mat-icon", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", action_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r3.description);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.welcomeMessage = "Welcome to the Hotel Management System dashboard.";
    this.dashboardSummary = {
      totalRooms: 0,
      availableRooms: 0,
      occupiedRooms: 0,
      totalGuests: 0,
      todayArrivals: 0,
      todayDepartures: 0,
      totalReservations: 0
    };
    this.stats = [
      { label: "Total Rooms", value: 0, icon: "hotel", color: "bg-primary" },
      { label: "Available Rooms", value: 0, icon: "meeting_room", color: "bg-success" },
      { label: "Occupied Rooms", value: 0, icon: "no_meeting_room", color: "bg-accent" },
      { label: "Today's Arrivals", value: 0, icon: "flight_land", color: "bg-info" },
      { label: "Today's Departures", value: 0, icon: "flight_takeoff", color: "bg-warn" },
      { label: "Total Guests", value: 0, icon: "people", color: "bg-primary" }
    ];
    this.quickActions = [
      {
        label: "New Reservation",
        icon: "add_circle",
        color: "color-primary",
        route: "/reservations/new",
        description: "Create a new reservation for a guest"
      },
      {
        label: "Check-in Guest",
        icon: "login",
        color: "color-success",
        route: "/reservations/check-in",
        description: "Check-in a guest with an existing reservation"
      },
      {
        label: "Check-out Guest",
        icon: "logout",
        color: "color-warn",
        route: "/reservations/check-out",
        description: "Check-out a guest and generate invoice"
      },
      {
        label: "Add New Guest",
        icon: "person_add",
        color: "color-info",
        route: "/guests/new",
        description: "Register a new guest in the system"
      }
    ];
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    const baseUrl = environment.apiUrl;
    forkJoin({
      rooms: this.http.get(`${baseUrl}/rooms`).pipe(catchError(() => [])),
      availableRooms: this.http.get(`${baseUrl}/rooms/available`).pipe(catchError(() => [])),
      arrivals: this.http.get(`${baseUrl}/reservations/arrivals`).pipe(catchError(() => [])),
      departures: this.http.get(`${baseUrl}/reservations/departures`).pipe(catchError(() => [])),
      guests: this.http.get(`${baseUrl}/guests`).pipe(catchError(() => [])),
      reservations: this.http.get(`${baseUrl}/reservations`).pipe(catchError(() => []))
    }).subscribe({
      next: (data) => {
        this.dashboardSummary = {
          totalRooms: data.rooms.length || 0,
          availableRooms: data.availableRooms.length || 0,
          occupiedRooms: (data.rooms.length || 0) - (data.availableRooms.length || 0),
          totalGuests: data.guests.length || 0,
          todayArrivals: data.arrivals.length || 0,
          todayDepartures: data.departures.length || 0,
          totalReservations: data.reservations.length || 0
        };
        this.stats[0].value = this.dashboardSummary.totalRooms;
        this.stats[1].value = this.dashboardSummary.availableRooms;
        this.stats[2].value = this.dashboardSummary.occupiedRooms;
        this.stats[3].value = this.dashboardSummary.todayArrivals;
        this.stats[4].value = this.dashboardSummary.todayDepartures;
        this.stats[5].value = this.dashboardSummary.totalGuests;
      },
      error: (error) => {
        console.error("Error loading dashboard data", error);
      }
    });
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 6, consts: [[1, "dashboard-container"], [1, "mat-headline-4"], [1, "welcome-card"], [1, "mat-headline-5"], [1, "mat-body-1"], [1, "stats-container"], ["class", "stat-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mat-headline-5", "section-title"], [1, "actions-container"], ["class", "action-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "stat-card", 3, "ngClass"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "action-card", 3, "click"], [3, "ngClass"], [1, "mat-headline-6"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, DashboardComponent_mat_card_10_Template, 9, 4, "mat-card", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2", 7);
        \u0275\u0275text(12, "Quick Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275template(14, DashboardComponent_mat_card_14_Template, 8, 4, "mat-card", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Welcome, ", (tmp_0_0 = \u0275\u0275pipeBind1(6, 4, ctx.authService.currentUser$)) == null ? null : tmp_0_0.username, "!");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.welcomeMessage);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.quickActions);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, AsyncPipe, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatButtonModule], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 32px 0 16px;\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.actions-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.action-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.action-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  margin-bottom: 16px;\n}\n.color-primary[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.color-accent[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.color-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.color-success[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.color-info[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: #fce4ec;\n}\n.bg-warn[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 162 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-I6Q7SBBG.js.map
