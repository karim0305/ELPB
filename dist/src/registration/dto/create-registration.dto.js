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
    companyCode;
    companyName;
    lpCode;
    lpName;
    serialNumber;
    imei;
    gps;
    gpsDistance;
    towerId;
    haulageCode;
    haulageName;
    registrationNumber;
    vehicleNumber;
    permitImage;
    driverImage;
    vehicleImage;
    date;
    time;
    remarks;
    documentNo;
    standardTime;
    timeTaken;
    difference;
}
exports.CreateRegistrationDto = CreateRegistrationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6466464', description: 'Unique mill ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "millid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'COMP001', description: 'Company code' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "companyCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Millid Corporation', description: 'Company name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'LP1001', description: 'Logistics partner code' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "lpCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Logistics Partner 1', description: 'Logistics partner name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "lpName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SN123456789', description: 'Device serial number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IMEI123456789012345', description: 'Device IMEI number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "imei", void 0);
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
    (0, swagger_1.ApiProperty)({ example: 5.2, description: 'GPS distance in km', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrationDto.prototype, "gpsDistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TWR1001', description: 'Tower ID', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "towerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HLG001', description: 'Haulage code', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "haulageCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Haulage Company 1', description: 'Haulage name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "haulageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'REG1234', description: 'Registration number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "registrationNumber", void 0);
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
    (0, swagger_1.ApiProperty)({ example: '2026-01-15', description: 'Date of registration', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateRegistrationDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10:30', description: 'Time of registration', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'All checks passed', description: 'Remarks', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "remarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DOC12345', description: 'Document number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "documentNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '24 Hours 0 Minutes', description: 'Standard time', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "standardTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1 Hour 37 Minutes', description: 'Time taken', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "timeTaken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '22 Hours 22 Minutes Early', description: 'Difference', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "difference", void 0);
//# sourceMappingURL=create-registration.dto.js.map