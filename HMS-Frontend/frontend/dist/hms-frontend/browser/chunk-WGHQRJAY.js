import "./chunk-J4B6MK7R.js";

// src/app/features/rooms/rooms.routes.ts
var ROOMS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-OWNWPNUS.js").then((c) => c.RoomListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-SBKNAB5W.js").then((c) => c.RoomFormComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-76ELXYNK.js").then((c) => c.RoomDetailComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-SBKNAB5W.js").then((c) => c.RoomFormComponent)
  }
];
export {
  ROOMS_ROUTES
};
//# sourceMappingURL=chunk-WGHQRJAY.js.map
