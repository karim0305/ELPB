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
exports.VerificationController = void 0;
const common_1 = require("@nestjs/common");
const verification_service_1 = require("./verification.service");
const create_verification_dto_1 = require("./dto/create-verification.dto");
const update_verification_dto_1 = require("./dto/update-verification.dto");
const swagger_1 = require("@nestjs/swagger");
let VerificationController = class VerificationController {
    verificationService;
    constructor(verificationService) {
        this.verificationService = verificationService;
    }
    create(createDto) {
        return this.verificationService.create(createDto);
    }
    findAll() {
        return this.verificationService.findAll();
    }
    findOne(id) {
        return this.verificationService.findOne(id);
    }
    update(id, updateDto) {
        return this.verificationService.update(id, updateDto);
    }
    remove(id) {
        return this.verificationService.remove(id);
    }
    GetVerification(millid) {
        return this.verificationService.GetVerificationByMill(millid);
    }
};
exports.VerificationController = VerificationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create verification' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Verification created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_verification_dto_1.CreateVerificationDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all verifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get verification by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update verification' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_verification_dto_1.UpdateVerificationDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete verification' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('verification/:millid'),
    __param(0, (0, common_1.Param)('millid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "GetVerification", null);
exports.VerificationController = VerificationController = __decorate([
    (0, swagger_1.ApiTags)('Verification'),
    (0, common_1.Controller)('verification'),
    __metadata("design:paramtypes", [verification_service_1.VerificationService])
], VerificationController);
//# sourceMappingURL=verification.controller.js.map