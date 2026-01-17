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
exports.CreateArrivalDto = exports.GpsDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GpsDto {
    latitude;
    longitude;
}
exports.GpsDto = GpsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.9716, description: 'Latitude of the device' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 77.5946, description: 'Longitude of the device' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsDto.prototype, "longitude", void 0);
class CreateArrivalDto {
    millid;
    deviceId;
    registrationId;
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
    status;
}
exports.CreateArrivalDto = CreateArrivalDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique mill ID' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "millid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Device MongoDB ObjectId' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Registration MongoDB ObjectId' }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "registrationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'COMP123', description: 'Company code' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "companyCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acme Corp', description: 'Company name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'LP456', description: 'LP code' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "lpCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'LP name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "lpName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SN789', description: 'Device serial number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IMEI1234567890', description: 'Device IMEI number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "imei", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: GpsDto, description: 'GPS coordinates of the device' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", GpsDto)
], CreateArrivalDto.prototype, "gps", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 15.5, description: 'Distance from tower in km' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateArrivalDto.prototype, "gpsDistance", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'TWR123', description: 'Tower ID' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "towerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'H123', description: 'Haulage code' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "haulageCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Haulage Corp', description: 'Haulage name' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "haulageName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'REG123', description: 'Registration number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "registrationNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'MH12AB1234', description: 'Vehicle number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "vehicleNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'permit.jpg', description: 'Permit image URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "permitImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'driver.jpg', description: 'Driver image URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "driverImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'vehicle.jpg', description: 'Vehicle image URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "vehicleImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-01-17', description: 'Arrival date' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateArrivalDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '14:30', description: 'Arrival time' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'On schedule', description: 'Remarks' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "remarks", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'DOC456', description: 'Document number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "documentNo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '10:00', description: 'Standard expected time' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "standardTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '00:30', description: 'Time taken' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "timeTaken", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '0:30', description: 'Difference from standard time' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "difference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending', description: 'Pending,Accepted,Rejected' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateArrivalDto.prototype, "status", void 0);
//# sourceMappingURL=create-arrival.dto.js.map