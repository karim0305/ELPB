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
exports.ElpController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const elp_service_1 = require("./elp.service");
const create_elp_dto_1 = require("./dto/create-elp.dto");
const update_elp_dto_1 = require("./dto/update-elp.dto");
const common_2 = require("@nestjs/common");
let ElpController = class ElpController {
    elpService;
    constructor(elpService) {
        this.elpService = elpService;
    }
    create(createElpDto) {
        return this.elpService.create(createElpDto);
    }
    findAllElps() {
        return this.elpService.findAllElps();
    }
    findAll(millid) {
        if (millid) {
            return this.elpService.findByMillId(millid);
        }
        return this.elpService.findAll();
    }
    findOne(id) {
        return this.elpService.findOne(id);
    }
    update(id, updateElpDto) {
        return this.elpService.update(id, updateElpDto);
    }
    remove(id) {
        return this.elpService.remove(id);
    }
};
exports.ElpController = ElpController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new ELP' }),
    (0, swagger_1.ApiBody)({ type: create_elp_dto_1.CreateElpDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_elp_dto_1.CreateElpDto]),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ELPs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "findAllElps", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ELPs or filter by millid' }),
    (0, swagger_1.ApiQuery)({ name: 'millid', required: false, example: '696b44fa74777afd475766b6' }),
    __param(0, (0, common_2.Query)('millid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get ELP by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update ELP by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_elp_dto_1.UpdateElpDto]),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete ELP by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElpController.prototype, "remove", null);
exports.ElpController = ElpController = __decorate([
    (0, swagger_1.ApiTags)('ELP'),
    (0, common_1.Controller)('elp'),
    __metadata("design:paramtypes", [elp_service_1.ElpService])
], ElpController);
//# sourceMappingURL=elp.controller.js.map