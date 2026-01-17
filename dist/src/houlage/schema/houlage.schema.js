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
exports.HaulageSchema = exports.Haulage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const millinfo_schema_1 = require("../../millinfo/schema/millinfo.schema");
let Haulage = class Haulage {
    millid;
    haulageCode;
    haulageName;
    remarks;
};
exports.Haulage = Haulage;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: millinfo_schema_1.MillInfo.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Haulage.prototype, "millid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Haulage.prototype, "haulageCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Haulage.prototype, "haulageName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], Haulage.prototype, "remarks", void 0);
exports.Haulage = Haulage = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Haulage);
exports.HaulageSchema = mongoose_1.SchemaFactory.createForClass(Haulage);
//# sourceMappingURL=houlage.schema.js.map