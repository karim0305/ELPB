"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationSchema = exports.Registration = exports.GpsSchema = exports.Gps = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const device_schema_1 = require("../../device/schema/device.schema");
const elp_schema_1 = require("../../elp/schema/elp.schema");
const millinfo_schema_1 = require("../../millinfo/schema/millinfo.schema");
let Gps = class Gps {
    latitude;
    longitude;
};
exports.Gps = Gps;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gps.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gps.prototype, "longitude", void 0);
exports.Gps = Gps = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Gps);
exports.GpsSchema = mongoose_1.SchemaFactory.createForClass(Gps);
let Registration = class Registration {
    millid;
    deviceId;
    elpId;
    gps;
    towerId;
    regid;
    haulage;
    vehicleNumber;
    documentNo;
    driverImage;
    vehicleImage;
    permitImage;
    remarks;
    status;
};
exports.Registration = Registration;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: millinfo_schema_1.MillInfo.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Registration.prototype, "millid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: device_schema_1.Device.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Registration.prototype, "deviceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: elp_schema_1.Elp.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Registration.prototype, "elpId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.GpsSchema }),
    __metadata("design:type", Gps)
], Registration.prototype, "gps", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "towerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true, index: true }),
    __metadata("design:type", String)
], Registration.prototype, "regid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "haulage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "vehicleNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "documentNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "driverImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "vehicleImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "permitImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Registration.prototype, "remarks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Registration.prototype, "status", void 0);
exports.Registration = Registration = __decorate([
    (0, mongoose_1.Schema)()
], Registration);
exports.RegistrationSchema = mongoose_1.SchemaFactory.createForClass(Registration);
//# sourceMappingURL=registration.schema.js.map