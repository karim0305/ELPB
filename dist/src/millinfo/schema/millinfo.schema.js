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
exports.MillInfoSchema = exports.MillInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MillInfo = class MillInfo {
    millcode;
    millname;
    focalperson;
    cnic;
    phone;
    address;
    email;
    role;
    profilePicture;
    lastLogin;
    status;
    password;
};
exports.MillInfo = MillInfo;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "millcode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "millname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "focalperson", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "cnic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MillInfo.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, lowercase: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Admin' }),
    __metadata("design:type", String)
], MillInfo.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'https://via.placeholder.com/150' }),
    __metadata("design:type", String)
], MillInfo.prototype, "profilePicture", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], MillInfo.prototype, "lastLogin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'Active' }),
    __metadata("design:type", String)
], MillInfo.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MillInfo.prototype, "password", void 0);
exports.MillInfo = MillInfo = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], MillInfo);
exports.MillInfoSchema = mongoose_1.SchemaFactory.createForClass(MillInfo);
//# sourceMappingURL=millinfo.schema.js.map