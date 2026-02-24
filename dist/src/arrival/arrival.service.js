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
exports.ArrivalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const arrival_schema_1 = require("./schema/arrival.schema");
let ArrivalService = class ArrivalService {
    arrivalModel;
    constructor(arrivalModel) {
        this.arrivalModel = arrivalModel;
    }
    async create(createArrivalDto) {
        try {
            const createdArrival = new this.arrivalModel({
                ...createArrivalDto,
                millid: new mongoose_2.Types.ObjectId(createArrivalDto.millid),
                userid: new mongoose_2.Types.ObjectId(createArrivalDto.userid),
                deviceId: new mongoose_2.Types.ObjectId(createArrivalDto.deviceId),
                elpId: new mongoose_2.Types.ObjectId(createArrivalDto.elpId),
            });
            const saved = await createdArrival.save();
            return await saved.populate('millid deviceId');
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException('regid already exists');
            }
            throw error;
        }
    }
    async findAll() {
        return this.arrivalModel
            .find()
            .populate('millid deviceId ')
            .exec();
    }
    async getArrivalElpByMillId(millid) {
        return this.arrivalModel
            .find({
            millid: new mongoose_2.Types.ObjectId(millid),
            status: 'Pending',
        })
            .populate('millid')
            .populate('elpId')
            .lean();
    }
    async findById(id) {
        const arrival = await this.arrivalModel
            .findById(id)
            .populate('millid deviceId')
            .exec();
        if (!arrival) {
            throw new common_1.NotFoundException(`Arrival with id ${id} not found`);
        }
        return arrival;
    }
    async updateStatus(id, status) {
        const updated = await this.arrivalModel
            .findByIdAndUpdate(id, { status }, { new: true })
            .populate('millid deviceId')
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException(`Arrival with id ${id} not found`);
        }
        return updated;
    }
    async update(id, updateDto) {
        const updated = await this.arrivalModel
            .findByIdAndUpdate(id, {
            ...updateDto,
            ...(updateDto.millid && {
                millid: new mongoose_2.Types.ObjectId(updateDto.millid),
            }),
            ...(updateDto.userid && {
                userid: new mongoose_2.Types.ObjectId(updateDto.userid),
            }),
            ...(updateDto.deviceId && {
                deviceId: new mongoose_2.Types.ObjectId(updateDto.deviceId),
            }),
        }, { new: true })
            .populate('millid deviceId')
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException(`Arrival with id ${id} not found`);
        }
        return updated;
    }
    async delete(id) {
        const deleted = await this.arrivalModel
            .findByIdAndDelete(id)
            .populate('millid deviceId')
            .exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Arrival with id ${id} not found`);
        }
        return deleted;
    }
};
exports.ArrivalService = ArrivalService;
exports.ArrivalService = ArrivalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(arrival_schema_1.Arrival.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArrivalService);
//# sourceMappingURL=arrival.service.js.map