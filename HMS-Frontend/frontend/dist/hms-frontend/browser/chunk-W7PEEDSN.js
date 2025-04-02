import "./chunk-J4B6MK7R.js";

// src/app/features/inventory/inventory.routes.ts
var INVENTORY_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-7FUMGV6W.js").then((c) => c.InventoryListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-V6UPTFGL.js").then((c) => c.InventoryFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-S6AATX4H.js").then((c) => c.InventoryDetailComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-V6UPTFGL.js").then((c) => c.InventoryFormComponent)
  }
];
export {
  INVENTORY_ROUTES
};
//# sourceMappingURL=chunk-W7PEEDSN.js.map
