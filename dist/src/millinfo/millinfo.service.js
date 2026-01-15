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
exports.MillInfoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const millinfo_schema_1 = require("./schema/millinfo.schema");
let MillInfoService = class MillInfoService {
    millInfoModel;
    constructor(millInfoModel) {
        this.millInfoModel = millInfoModel;
    }
    async create(createMillInfoDto) {
        const created = new this.millInfoModel(createMillInfoDto);
        return created.save();
    }
    async findAll() {
        return this.millInfoModel.find().exec();
    }
    async findOne(id) {
        const mill = await this.millInfoModel.findById(id).exec();
        if (!mill)
            throw new common_1.NotFoundException(`Mill with ID ${id} not found`);
        return mill;
    }
    async update(id, updateDto) {
        const updated = await this.millInfoModel
            .findByIdAndUpdate(id, updateDto, { new: true })
            .exec();
        if (!updated)
            throw new common_1.NotFoundException(`Mill with ID ${id} not found`);
        return updated;
    }
    async remove(id) {
        const deleted = await this.millInfoModel.findByIdAndDelete(id).exec();
        if (!deleted)
            throw new common_1.NotFoundException(`Mill with ID ${id} not found`);
        return { message: 'Mill info deleted successfully' };
    }
};
exports.MillInfoService = MillInfoService;
exports.MillInfoService = MillInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(millinfo_schema_1.MillInfo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MillInfoService);
//# sourceMappingURL=millinfo.service.js.map