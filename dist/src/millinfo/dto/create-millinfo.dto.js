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
exports.CreateMillInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMillInfoDto {
    millcode;
    millname;
    focalperson;
    cnic;
    phone;
    address;
    email;
    role;
    profilePicture;
    status;
    password;
}
exports.CreateMillInfoDto = CreateMillInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MILL001', description: 'Unique mill code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "millcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sunrise Textile Mill', description: 'Name of the mill' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "millname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Focal person for the mill' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "focalperson", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '35201-1234567-8', description: 'CNIC of the focal person' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "cnic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+92-300-1234567', description: 'Contact phone number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Textile Street, Lahore', description: 'Address of the mill', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'contact@sunrisemill.com', description: 'Email of the mill' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Admin', description: 'Role of the user', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://via.placeholder.com/150', description: 'Profile picture URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "profilePicture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', description: 'Status of the mill info', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'P@ssw0rd123', description: 'Password for the mill account' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMillInfoDto.prototype, "password", void 0);
//# sourceMappingURL=create-millinfo.dto.js.map