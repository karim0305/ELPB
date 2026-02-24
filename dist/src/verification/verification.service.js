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
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const verification_schema_1 = require("./schema/verification.schema");
const registration_schema_1 = require("../registration/schema/registration.schema");
let VerificationService = class VerificationService {
    verificationModel;
    registrationModel;
    constructor(verificationModel, registrationModel) {
        this.verificationModel = verificationModel;
        this.registrationModel = registrationModel;
    }
    async create(createDto) {
        const created = new this.verificationModel({
            ...createDto,
            millid: new mongoose_2.Types.ObjectId(createDto.millid),
            registrationid: new mongoose_2.Types.ObjectId(createDto.registrationid),
            arrivalid: new mongoose_2.Types.ObjectId(createDto.arrivalid),
        });
        return created.save();
    }
    async findAll() {
        return this.verificationModel
            .find()
            .populate('millid')
            .populate('registrationid')
            .exec();
    }
    async findOne(id) {
        const verification = await this.verificationModel
            .findById(id)
            .populate('millid')
            .populate('registrationid')
            .exec();
        if (!verification) {
            throw new common_1.NotFoundException('Verification not found');
        }
        return verification;
    }
    async update(id, updateDto) {
        const updated = await this.verificationModel
            .findByIdAndUpdate(id, updateDto, { new: true })
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException('Verification not found');
        }
        return updated;
    }
    async remove(id) {
        const deleted = await this.verificationModel
            .findByIdAndDelete(id)
            .exec();
        if (!deleted) {
            throw new common_1.NotFoundException('Verification not found');
        }
        return { message: 'Verification deleted successfully' };
    }
    async GetVerificationByMill(millid) {
        return this.verificationModel
            .find({ millid: new mongoose_2.Types.ObjectId(millid) })
            .populate('millid')
            .populate('registrationid')
            .populate('arrivalid')
            .lean();
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(verification_schema_1.Verification.name)),
    __param(1, (0, mongoose_1.InjectModel)(registration_schema_1.Registration.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VerificationService);
//# sourceMappingURL=verification.service.js.map