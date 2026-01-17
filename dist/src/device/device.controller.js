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
exports.DeviceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const device_service_1 = require("./device.service");
const create_device_dto_1 = require("./dto/create-device.dto");
const update_device_dto_1 = require("./dto/update-device.dto");
let DeviceController = class DeviceController {
    deviceService;
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    create(dto) {
        return this.deviceService.create(dto);
    }
    findAll() {
        return this.deviceService.findAll();
    }
    findOne(millid) {
        return this.deviceService.findByMillid(millid);
    }
    update(millid, dto) {
        return this.deviceService.updateByMillid(millid, dto);
    }
    remove(millid) {
        return this.deviceService.deleteById(millid);
    }
};
exports.DeviceController = DeviceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register device information' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_device_dto_1.CreateDeviceDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all device records' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':millid'),
    (0, swagger_1.ApiParam)({ name: 'millid', example: 'mill-123456' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get device by millid' }),
    __param(0, (0, common_1.Param)('millid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':millid'),
    (0, swagger_1.ApiParam)({ name: 'millid', example: 'mill-123456' }),
    (0, swagger_1.ApiOperation)({ summary: 'Update device information by millid' }),
    __param(0, (0, common_1.Param)('millid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_device_dto_1.UpdateDeviceDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':millid'),
    (0, swagger_1.ApiParam)({ name: 'millid', example: 'mill-123456' }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete device by millid' }),
    __param(0, (0, common_1.Param)('millid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "remove", null);
exports.DeviceController = DeviceController = __decorate([
    (0, swagger_1.ApiTags)('Device'),
    (0, common_1.Controller)('device'),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], DeviceController);
//# sourceMappingURL=device.controller.js.map