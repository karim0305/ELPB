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
exports.VerificationSchema = exports.Verification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const arrival_entity_1 = require("../../arrival/entities/arrival.entity");
const millinfo_schema_1 = require("../../millinfo/schema/millinfo.schema");
const registration_schema_1 = require("../../registration/schema/registration.schema");
let Verification = class Verification {
    millid;
    registrationid;
    arrivalid;
    status;
    remarks;
};
exports.Verification = Verification;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: millinfo_schema_1.MillInfo.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Verification.prototype, "millid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: registration_schema_1.Registration.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Verification.prototype, "registrationid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: arrival_entity_1.Arrival.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Verification.prototype, "arrivalid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Verification.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Verification.prototype, "remarks", void 0);
exports.Verification = Verification = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Verification);
exports.VerificationSchema = mongoose_1.SchemaFactory.createForClass(Verification);
//# sourceMappingURL=verification.schema.js.map