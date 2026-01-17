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
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const registration_schema_1 = require("./schema/registration.schema");
let RegistrationService = class RegistrationService {
    registrationModel;
    constructor(registrationModel) {
        this.registrationModel = registrationModel;
    }
    async create(dto) {
        const created = new this.registrationModel({
            ...dto,
            millid: new mongoose_2.Types.ObjectId(dto.millid),
        });
        const saved = await created.save();
        return saved.toObject();
    }
    async findAll() {
        const registrations = await this.registrationModel
            .find()
            .populate('millid')
            .exec();
        return registrations.map(r => r.toObject());
    }
    async findOne(id) {
        const registration = await this.registrationModel
            .findById(id)
            .populate('millid')
            .exec();
        if (!registration) {
            throw new common_1.NotFoundException(`Registration with ID ${id} not found`);
        }
        return registration.toObject();
    }
    async update(id, updateDto) {
        const updated = await this.registrationModel
            .findByIdAndUpdate(id, {
            ...updateDto,
            ...(updateDto.millid && {
                millid: new mongoose_2.Types.ObjectId(updateDto.millid),
            }),
        }, { new: true })
            .populate('millid')
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException(`Registration with ID ${id} not found`);
        }
        return updated.toObject();
    }
    async remove(id) {
        const deleted = await this.registrationModel
            .findByIdAndDelete(id)
            .exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Registration with ID ${id} not found`);
        }
        return deleted.toObject();
    }
    async findByMill(millid) {
        const registrations = await this.registrationModel
            .find({ millid: new mongoose_2.Types.ObjectId(millid) })
            .populate('millid')
            .exec();
        return registrations.map(r => r.toObject());
    }
};
exports.RegistrationService = RegistrationService;
exports.RegistrationService = RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(registration_schema_1.Registration.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RegistrationService);
//# sourceMappingURL=registration.service.js.map