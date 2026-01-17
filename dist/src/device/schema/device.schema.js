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
exports.DeviceSchema = exports.Device = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const millinfo_schema_1 = require("../../millinfo/schema/millinfo.schema");
let Device = class Device extends mongoose_2.Document {
    millid;
    deviceModel;
    deviceBrand;
    location;
    approximateLocation;
    internetStatus;
    imei;
    macAddress;
};
exports.Device = Device;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: millinfo_schema_1.MillInfo.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Device.prototype, "millid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Device.prototype, "deviceModel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Device.prototype, "deviceBrand", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            latitude: Number,
            longitude: Number,
            altitude: Number,
            speed: Number,
        },
    }),
    __metadata("design:type", Object)
], Device.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Device.prototype, "approximateLocation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Device.prototype, "internetStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Device.prototype, "imei", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Device.prototype, "macAddress", void 0);
exports.Device = Device = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Device);
exports.DeviceSchema = mongoose_1.SchemaFactory.createForClass(Device);
//# sourceMappingURL=device.schema.js.map