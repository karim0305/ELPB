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
exports.HaulageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const houlage_schema_1 = require("./schema/houlage.schema");
const houlage_service_1 = require("./houlage.service");
const create_houlage_dto_1 = require("./dto/create-houlage.dto");
const update_houlage_dto_1 = require("./dto/update-houlage.dto");
let HaulageController = class HaulageController {
    haulageService;
    constructor(haulageService) {
        this.haulageService = haulageService;
    }
    create(dto) {
        return this.haulageService.create(dto);
    }
    findAll() {
        return this.haulageService.findAll();
    }
    findOne(id) {
        return this.haulageService.findOne(id);
    }
    update(id, dto) {
        return this.haulageService.update(id, dto);
    }
    remove(id) {
        return this.haulageService.remove(id);
    }
};
exports.HaulageController = HaulageController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create haulage' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: houlage_schema_1.Haulage }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_houlage_dto_1.CreateHaulageDto]),
    __metadata("design:returntype", void 0)
], HaulageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all haulages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HaulageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get haulage by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HaulageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update haulage' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_houlage_dto_1.UpdateHaulageDto]),
    __metadata("design:returntype", void 0)
], HaulageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete haulage' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HaulageController.prototype, "remove", null);
exports.HaulageController = HaulageController = __decorate([
    (0, swagger_1.ApiTags)('Haulage'),
    (0, common_1.Controller)('haulage'),
    __metadata("design:paramtypes", [houlage_service_1.HaulageService])
], HaulageController);
//# sourceMappingURL=houlage.controller.js.map