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
const registration_gateway_1 = require("./registration.gateway");
let RegistrationService = class RegistrationService {
    registrationModel;
    registrationGateway;
    constructor(registrationModel, registrationGateway) {
        this.registrationModel = registrationModel;
        this.registrationGateway = registrationGateway;
    }
    async create(dto) {
        try {
            const lastRegistration = await this.registrationModel
                .findOne({}, { regid: 1 })
                .sort({ createdAt: -1 })
                .lean();
            let nextNumber = 1001;
            if (lastRegistration?.regid) {
                const lastNum = parseInt(lastRegistration.regid.replace('CSML', ''), 10);
                nextNumber = lastNum + 1;
            }
            const regid = `CSML${nextNumber}`;
            const created = new this.registrationModel({
                ...dto,
                regid,
                millid: new mongoose_2.Types.ObjectId(dto.millid),
                deviceId: new mongoose_2.Types.ObjectId(dto.deviceId),
                elpId: new mongoose_2.Types.ObjectId(dto.elpId),
                gps: dto.gps
                    ? {
                        latitude: dto.gps.latitude,
                        longitude: dto.gps.longitude,
                    }
                    : undefined,
                status: 'Pending',
            });
            const saved = await created.save();
            this.registrationGateway.emitRegistrationCreated(saved);
            return saved;
        }
        catch (error) {
            throw error;
        }
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
        this.registrationGateway.emitRegistrationUpdated(updated.toObject());
        return updated.toObject();
    }
    async remove(id) {
        const deleted = await this.registrationModel
            .findByIdAndDelete(id)
            .exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Registration with ID ${id} not found`);
        }
        this.registrationGateway.emitRegistrationDeleted(id);
        return deleted.toObject();
    }
    async findByMill(millid) {
        const registrations = await this.registrationModel
            .find({ millid: new mongoose_2.Types.ObjectId(millid) })
            .populate('millid')
            .exec();
        return registrations.map(r => r.toObject());
    }
    async getByMillId(millid, deviceId) {
        const query = {
            millid: new mongoose_2.Types.ObjectId(millid),
        };
        if (deviceId) {
            query.deviceId = new mongoose_2.Types.ObjectId(deviceId);
        }
        return this.registrationModel
            .find(query)
            .sort({ createdAt: -1 });
    }
};
exports.RegistrationService = RegistrationService;
exports.RegistrationService = RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(registration_schema_1.Registration.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        registration_gateway_1.RegistrationGateway])
], RegistrationService);
//# sourceMappingURL=registration.service.js.map