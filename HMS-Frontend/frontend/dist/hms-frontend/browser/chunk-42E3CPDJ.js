import "./chunk-J4B6MK7R.js";

// src/app/features/invoices/invoices.routes.ts
var INVOICES_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-V4HHJ6AF.js").then((c) => c.InvoiceListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-5YFAVKYD.js").then((c) => c.InvoiceFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-SPBYSIY2.js").then((c) => c.InvoiceDetailComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-5YFAVKYD.js").then((c) => c.InvoiceFormComponent)
  }
];
export {
  INVOICES_ROUTES
};
//# sourceMappingURL=chunk-42E3CPDJ.js.map
