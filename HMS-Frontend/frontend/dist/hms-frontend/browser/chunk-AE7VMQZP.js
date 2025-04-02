import "./chunk-J4B6MK7R.js";

// src/app/features/staff/staff.routes.ts
var STAFF_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-REJAG7ER.js").then((c) => c.StaffListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-LHLVRIGI.js").then((c) => c.StaffFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-WN35HBJR.js").then((c) => c.StaffDetailComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-LHLVRIGI.js").then((c) => c.StaffFormComponent)
  }
];
export {
  STAFF_ROUTES
};
//# sourceMappingURL=chunk-AE7VMQZP.js.map
