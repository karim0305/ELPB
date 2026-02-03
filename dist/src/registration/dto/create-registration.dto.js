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
exports.CreateRegistrationDto = exports.GpsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class GpsDto {
    latitude;
    longitude;
}
exports.GpsDto = GpsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 37.7749, description: 'Latitude of the device' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -122.4194, description: 'Longitude of the device' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsDto.prototype, "longitude", void 0);
class CreateRegistrationDto {
    millid;
    deviceId;
    elpId;
    gps;
    towerId;
    regid;
    haulage;
    documentNo;
    vehicleNumber;
    permitImage;
    driverImage;
    vehicleImage;
    remarks;
    status;
}
exports.CreateRegistrationDto = CreateRegistrationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique mill ID' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "millid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Device MongoDB ObjectId' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique id of ELp' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "elpId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { latitude: 37.7749, longitude: -122.4194 },
        description: 'GPS coordinates',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GpsDto),
    __metadata("design:type", GpsDto)
], CreateRegistrationDto.prototype, "gps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TWR1001', description: 'Tower ID', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "towerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CSML1001', description: 'Registration Number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "regid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HLG001', description: 'Haulage code', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "haulage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DOC12345', description: 'Document number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "documentNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'VEH1234', description: 'Vehicle number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "vehicleNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'permit.png', description: 'Permit image filename', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "permitImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'driver.png', description: 'Driver image filename', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "driverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'vehicle.png', description: 'Vehicle image filename', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "vehicleImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'All checks passed', description: 'Remarks', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "remarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending', description: 'Pending,Accepted,Rejected' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "status", void 0);
//# sourceMappingURL=create-registration.dto.js.map