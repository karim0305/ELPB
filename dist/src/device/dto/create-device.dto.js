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
exports.CreateDeviceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LocationDto {
    latitude;
    longitude;
    altitude;
    speed;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 28.6139,
        description: 'Latitude of the device location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 77.209,
        description: 'Longitude of the device location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 215,
        description: 'Altitude in meters (Android only)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "altitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 3.4,
        description: 'Speed in m/s (Android only)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "speed", void 0);
class CreateDeviceDto {
    millid;
    elpid;
    deviceModel;
    deviceBrand;
    location;
    approximateLocation;
    type;
    imei;
    Tawerid;
    status;
}
exports.CreateDeviceDto = CreateDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '64cfa9a3b8c1a34f9e12abcd',
        description: 'MillInfo MongoDB ObjectId',
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "millid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '64cfa9a3b8c1a34f9e12abcd',
        description: 'Elp MongoDB ObjectId',
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "elpid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pixel 7',
        description: 'Device model',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "deviceModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Google',
        description: 'Device brand/manufacturer',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "deviceBrand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: LocationDto,
        example: {
            latitude: 28.6139,
            longitude: 77.209,
            altitude: 215,
            speed: 3.4,
        },
    }),
    __metadata("design:type", LocationDto)
], CreateDeviceDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'New Delhi, India',
        description: 'Human-readable approximate location',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "approximateLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Internet connectivity status',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'ABCDEF123456789',
        description: 'IMEI (usually unavailable due to OS restrictions)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "imei", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '354543535',
        description: 'Randomized Tawerid',
        default: '0',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "Tawerid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Deactive',
        description: 'Device status',
        default: 'Deactive',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "status", void 0);
//# sourceMappingURL=create-device.dto.js.map