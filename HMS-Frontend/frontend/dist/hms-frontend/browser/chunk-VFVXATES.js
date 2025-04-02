import "./chunk-J4B6MK7R.js";

// src/app/features/reservations/reservations.routes.ts
var RESERVATIONS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-CAQKZH7Q.js").then((c) => c.ReservationListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-DDO7FK5D.js").then((c) => c.ReservationFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-VRNJRRCU.js").then((c) => c.ReservationDetailComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-DDO7FK5D.js").then((c) => c.ReservationFormComponent)
  }
];
export {
  RESERVATIONS_ROUTES
};
//# sourceMappingURL=chunk-VFVXATES.js.map
