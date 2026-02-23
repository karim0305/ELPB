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
exports.ArrivalSchema = exports.Arrival = exports.GpsSchema = exports.Gps = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const device_schema_1 = require("../../device/schema/device.schema");
const elp_schema_1 = require("../../elp/schema/elp.schema");
const millinfo_schema_1 = require("../../millinfo/schema/millinfo.schema");
const user_entity_1 = require("../../user/entities/user.entity");
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
let Arrival = class Arrival {
    userid;
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
exports.Arrival = Arrival;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: user_entity_1.User.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Arrival.prototype, "userid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: millinfo_schema_1.MillInfo.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Arrival.prototype, "millid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: device_schema_1.Device.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Arrival.prototype, "deviceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: elp_schema_1.Elp.name,
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Arrival.prototype, "elpId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.GpsSchema }),
    __metadata("design:type", Gps)
], Arrival.prototype, "gps", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "towerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true, index: true }),
    __metadata("design:type", String)
], Arrival.prototype, "regid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "haulage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "vehicleNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "documentNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "driverImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "vehicleImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "permitImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Arrival.prototype, "remarks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Arrival.prototype, "status", void 0);
exports.Arrival = Arrival = __decorate([
    (0, mongoose_1.Schema)()
], Arrival);
exports.ArrivalSchema = mongoose_1.SchemaFactory.createForClass(Arrival);
//# sourceMappingURL=arrival.schema.js.map