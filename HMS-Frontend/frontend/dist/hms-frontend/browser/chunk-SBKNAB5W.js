import {
  MatDividerModule
} from "./chunk-YNKC65FH.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MZ5CGW3Y.js";
import {
  MatChip,
  MatChipRemove,
  MatChipSet,
  MatChipsModule
} from "./chunk-PFMZ3XHA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-A73SGYBN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WL3U4NOB.js";
import {
  MatSnackBar
} from "./chunk-YYXQY53Y.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-PZ47AC3Q.js";
import "./chunk-W6NUDNO3.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-ZKLSL4BO.js";
import {
  environment
} from "./chunk-THZPQC5N.js";
import {
  COMMA,
  ENTER,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatMiniFabButton,
  MatOption
} from "./chunk-U5BHYJH7.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  Location,
  NgForOf,
  NgIf,
  Router,
  catchError,
  finalize,
  inject,
  of,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2DAULNLE.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/rooms/room-form/room-form.component.ts
function RoomFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "mat-spinner", 40);
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Room number is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Floor is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Room type is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Status is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Price is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Price must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Capacity is required ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_error_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Capacity must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_mat_chip_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 41);
    \u0275\u0275listener("removed", function RoomFormComponent_mat_chip_81_Template_mat_chip_removed_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeAmenity(i_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 42);
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amenity_r4 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amenity_r4.value, " ");
  }
}
function RoomFormComponent_mat_chip_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 43);
    \u0275\u0275text(1, " No amenities added ");
    \u0275\u0275elementEnd();
  }
}
function RoomFormComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-form-field", 45)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function RoomFormComponent_div_87_Template_button_click_5_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage(i_r6));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Image URL ", i_r6 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", i_r6);
  }
}
var RoomFormComponent = class _RoomFormComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.location = inject(Location);
    this.snackBar = inject(MatSnackBar);
    this.isEditMode = false;
    this.loading = false;
    this.newAmenity = "";
    this.separatorKeysCodes = [ENTER, COMMA];
    this.roomForm = this.fb.group({
      roomNumber: ["", Validators.required],
      type: ["STANDARD", Validators.required],
      price: [100, [Validators.required, Validators.min(0.01)]],
      capacity: [2, [Validators.required, Validators.min(1)]],
      status: ["AVAILABLE", Validators.required],
      amenities: this.fb.array([]),
      description: [""],
      floor: [1, Validators.required],
      images: this.fb.array([])
    });
  }
  get amenitiesArray() {
    return this.roomForm.get("amenities");
  }
  get imagesArray() {
    return this.roomForm.get("images");
  }
  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params) => {
      const roomId = params.get("id");
      if (roomId) {
        this.isEditMode = true;
        this.loading = true;
        const baseUrl = environment.apiUrl;
        return this.http.get(`${baseUrl}/rooms/${roomId}`).pipe(catchError((error) => {
          console.error("Error loading room details", error);
          this.snackBar.open("Failed to load room details. Please try again later.", "Close", { duration: 5e3 });
          return of(null);
        }), finalize(() => this.loading = false));
      }
      return of(null);
    })).subscribe((room) => {
      if (room) {
        this.populateForm(room);
      }
    });
  }
  populateForm(room) {
    this.roomForm.patchValue({
      roomNumber: room.roomNumber,
      type: room.type,
      price: room.price,
      capacity: room.capacity,
      status: room.status,
      description: room.description,
      floor: room.floor
    });
    this.amenitiesArray.clear();
    if (room.amenities && room.amenities.length > 0) {
      room.amenities.forEach((amenity) => {
        this.amenitiesArray.push(this.fb.control(amenity));
      });
    }
    this.imagesArray.clear();
    if (room.images && room.images.length > 0) {
      room.images.forEach((image) => {
        this.imagesArray.push(this.fb.control(image));
      });
    }
  }
  addAmenity(event) {
    if (event) {
      event.preventDefault();
    }
    const value = this.newAmenity.trim();
    if (value) {
      const existing = this.amenitiesArray.value.find((a) => a.toLowerCase() === value.toLowerCase());
      if (!existing) {
        this.amenitiesArray.push(this.fb.control(value));
      }
      this.newAmenity = "";
    }
  }
  removeAmenity(index) {
    this.amenitiesArray.removeAt(index);
  }
  addImage() {
    this.imagesArray.push(this.fb.control(""));
  }
  removeImage(index) {
    this.imagesArray.removeAt(index);
  }
  onSubmit() {
    if (this.roomForm.invalid) {
      return;
    }
    this.loading = true;
    const formValue = this.roomForm.value;
    formValue.images = formValue.images.filter((url) => url.trim() !== "");
    const baseUrl = environment.apiUrl;
    if (this.isEditMode) {
      const roomId = this.route.snapshot.paramMap.get("id");
      this.http.put(`${baseUrl}/rooms/${roomId}`, formValue).pipe(catchError((error) => {
        console.error("Error updating room", error);
        this.snackBar.open("Failed to update room. Please try again later.", "Close", { duration: 5e3 });
        return of(null);
      }), finalize(() => this.loading = false)).subscribe((response) => {
        if (response) {
          this.snackBar.open(`Room ${formValue.roomNumber} updated successfully`, "Close", { duration: 3e3 });
          this.router.navigate(["/rooms", roomId]);
        }
      });
    } else {
      this.http.post(`${baseUrl}/rooms`, formValue).pipe(catchError((error) => {
        console.error("Error creating room", error);
        this.snackBar.open("Failed to create room. Please try again later.", "Close", { duration: 5e3 });
        return of(null);
      }), finalize(() => this.loading = false)).subscribe((response) => {
        if (response) {
          this.snackBar.open(`Room ${formValue.roomNumber} created successfully`, "Close", { duration: 3e3 });
          this.router.navigate(["/rooms"]);
        }
      });
    }
  }
  goBack() {
    this.location.back();
  }
  static {
    this.\u0275fac = function RoomFormComponent_Factory(t) {
      return new (t || _RoomFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomFormComponent, selectors: [["app-room-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 97, vars: 18, consts: [[1, "room-form-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "back-button"], ["mat-button", "", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "roomNumber", "placeholder", "e.g. 101", "required", ""], [4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "floor", "placeholder", "e.g. 1", "required", ""], ["formControlName", "type", "required", ""], ["value", "STANDARD"], ["value", "DELUXE"], ["value", "SUITE"], ["value", "EXECUTIVE"], ["formControlName", "status", "required", ""], ["value", "AVAILABLE"], ["value", "OCCUPIED"], ["value", "MAINTENANCE"], ["matInput", "", "type", "number", "formControlName", "price", "placeholder", "e.g. 150.00", "required", ""], ["matTextPrefix", ""], ["matInput", "", "type", "number", "formControlName", "capacity", "placeholder", "e.g. 2", "required", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "description", "placeholder", "Enter room description", "rows", "4"], [1, "amenities-section"], [1, "amenities-input"], ["appearance", "outline", 1, "amenity-input"], ["matInput", "", "placeholder", "e.g. WiFi", 3, "input", "keydown.enter", "value"], ["type", "button", "mat-mini-fab", "", "color", "primary", 3, "click", "disabled"], ["formArrayName", "amenities", 1, "amenities-list"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["disabled", "", 4, "ngIf"], [1, "image-urls-section"], ["formArrayName", "images"], ["class", "image-url-row", 4, "ngFor", "ngForOf"], ["type", "button", "mat-stroked-button", "", "color", "primary", 3, "click"], [1, "form-actions"], ["type", "button", "mat-button", "", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "loading-overlay"], ["diameter", "40"], [3, "removed", "removable"], ["matChipRemove", ""], ["disabled", ""], [1, "image-url-row"], ["appearance", "outline", 1, "image-url-input"], ["matInput", "", "placeholder", "https://example.com/image.jpg", 3, "formControlName"], ["type", "button", "mat-icon-button", "", "color", "warn", 3, "click"]], template: function RoomFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, RoomFormComponent_div_1_Template, 2, 0, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function RoomFormComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back to Rooms ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-card")(8, "mat-card-header")(9, "mat-card-title");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "mat-card-content")(12, "form", 4);
        \u0275\u0275listener("ngSubmit", function RoomFormComponent_Template_form_ngSubmit_12_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(13, "div", 5)(14, "mat-form-field", 6)(15, "mat-label");
        \u0275\u0275text(16, "Room Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 7);
        \u0275\u0275template(18, RoomFormComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 6)(20, "mat-label");
        \u0275\u0275text(21, "Floor");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 9);
        \u0275\u0275template(23, RoomFormComponent_mat_error_23_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 5)(25, "mat-form-field", 6)(26, "mat-label");
        \u0275\u0275text(27, "Room Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-select", 10)(29, "mat-option", 11);
        \u0275\u0275text(30, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-option", 12);
        \u0275\u0275text(32, "Deluxe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 13);
        \u0275\u0275text(34, "Suite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-option", 14);
        \u0275\u0275text(36, "Executive");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, RoomFormComponent_mat_error_37_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-form-field", 6)(39, "mat-label");
        \u0275\u0275text(40, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-select", 15)(42, "mat-option", 16);
        \u0275\u0275text(43, "Available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 17);
        \u0275\u0275text(45, "Occupied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 18);
        \u0275\u0275text(47, "Maintenance");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, RoomFormComponent_mat_error_48_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 5)(50, "mat-form-field", 6)(51, "mat-label");
        \u0275\u0275text(52, "Price per Night");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "input", 19);
        \u0275\u0275elementStart(54, "span", 20);
        \u0275\u0275text(55, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, RoomFormComponent_mat_error_56_Template, 2, 0, "mat-error", 8)(57, RoomFormComponent_mat_error_57_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 6)(59, "mat-label");
        \u0275\u0275text(60, "Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "input", 21);
        \u0275\u0275template(62, RoomFormComponent_mat_error_62_Template, 2, 0, "mat-error", 8)(63, RoomFormComponent_mat_error_63_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "mat-form-field", 22)(65, "mat-label");
        \u0275\u0275text(66, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "textarea", 23);
        \u0275\u0275text(68, "              ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 24)(70, "h3");
        \u0275\u0275text(71, "Amenities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 25)(73, "mat-form-field", 26)(74, "mat-label");
        \u0275\u0275text(75, "Add Amenity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "input", 27);
        \u0275\u0275listener("input", function RoomFormComponent_Template_input_input_76_listener($event) {
          return ctx.newAmenity = $event.target.value;
        })("keydown.enter", function RoomFormComponent_Template_input_keydown_enter_76_listener($event) {
          return ctx.addAmenity($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "button", 28);
        \u0275\u0275listener("click", function RoomFormComponent_Template_button_click_77_listener() {
          return ctx.addAmenity();
        });
        \u0275\u0275elementStart(78, "mat-icon");
        \u0275\u0275text(79, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "mat-chip-set", 29);
        \u0275\u0275template(81, RoomFormComponent_mat_chip_81_Template, 4, 2, "mat-chip", 30)(82, RoomFormComponent_mat_chip_82_Template, 2, 0, "mat-chip", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 32)(84, "h3");
        \u0275\u0275text(85, "Image URLs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 33);
        \u0275\u0275template(87, RoomFormComponent_div_87_Template, 8, 2, "div", 34);
        \u0275\u0275elementStart(88, "button", 35);
        \u0275\u0275listener("click", function RoomFormComponent_Template_button_click_88_listener() {
          return ctx.addImage();
        });
        \u0275\u0275elementStart(89, "mat-icon");
        \u0275\u0275text(90, "add_photo_alternate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " Add Image URL ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 36)(93, "button", 37);
        \u0275\u0275listener("click", function RoomFormComponent_Template_button_click_93_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(94, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "button", 38);
        \u0275\u0275text(96);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Room" : "Add New Room");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.roomForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.roomForm.get("roomNumber")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.roomForm.get("floor")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.roomForm.get("type")) == null ? null : tmp_5_0.hasError("required"));
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", (tmp_6_0 = ctx.roomForm.get("status")) == null ? null : tmp_6_0.hasError("required"));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.roomForm.get("price")) == null ? null : tmp_7_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_8_0 = ctx.roomForm.get("price")) == null ? null : tmp_8_0.hasError("min"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.roomForm.get("capacity")) == null ? null : tmp_9_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_10_0 = ctx.roomForm.get("capacity")) == null ? null : tmp_10_0.hasError("min"));
        \u0275\u0275advance(13);
        \u0275\u0275property("value", ctx.newAmenity);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.newAmenity.trim());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.amenitiesArray.controls);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.amenitiesArray.length === 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.imagesArray.controls);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.roomForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Room" : "Create Room", " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      FormArrayName,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatMiniFabButton,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatChip,
      MatChipRemove,
      MatChipSet,
      MatDividerModule,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.room-form-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.amenities-section[_ngcontent-%COMP%], .image-urls-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\nh3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.amenities-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.amenity-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.amenities-list[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.image-url-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.image-url-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=room-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomFormComponent, { className: "RoomFormComponent", filePath: "src\\app\\features\\rooms\\room-form\\room-form.component.ts", lineNumber: 308 });
})();
export {
  RoomFormComponent
};
//# sourceMappingURL=chunk-SBKNAB5W.js.map
