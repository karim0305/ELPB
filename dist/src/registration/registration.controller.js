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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registration_service_1 = require("./registration.service");
const create_registration_dto_1 = require("./dto/create-registration.dto");
let RegistrationController = class RegistrationController {
    registrationService;
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    create(createRegistrationDto) {
        return this.registrationService.create(createRegistrationDto);
    }
    findAll() {
        return this.registrationService.findAll();
    }
    getByMillId(millid, deviceId) {
        return this.registrationService.getByMillId(millid, deviceId);
    }
    registrationWithElp(millid) {
        return this.registrationService.getRegistrationElpByMillId(millid);
    }
    findOne(id) {
        return this.registrationService.findOne(id);
    }
    update(id, updateDto) {
        return this.registrationService.update(id, updateDto);
    }
    remove(id) {
        return this.registrationService.remove(id);
    }
};
exports.RegistrationController = RegistrationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registration_dto_1.CreateRegistrationDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('by-mill/:millid'),
    __param(0, (0, common_1.Param)('millid')),
    __param(1, (0, common_1.Query)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "getByMillId", null);
__decorate([
    (0, common_1.Get)('registrationWithElp/:millid'),
    __param(0, (0, common_1.Param)('millid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrationController.prototype, "registrationWithElp", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "remove", null);
exports.RegistrationController = RegistrationController = __decorate([
    (0, swagger_1.ApiTags)('registration'),
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService])
], RegistrationController);
//# sourceMappingURL=registration.controller.js.map