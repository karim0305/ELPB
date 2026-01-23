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
exports.ElpService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const elp_schema_1 = require("./schema/elp.schema");
let ElpService = class ElpService {
    elpModel;
    constructor(elpModel) {
        this.elpModel = elpModel;
    }
    async create(createElpDto) {
        return this.elpModel.create(createElpDto);
    }
    async findAll() {
        return this.elpModel.find().populate('millid').exec();
    }
    async findOne(id) {
        const elp = await this.elpModel.findById(id).populate('millid');
        if (!elp)
            throw new common_1.NotFoundException('ELP not found');
        return elp;
    }
    async update(id, updateElpDto) {
        const elp = await this.elpModel.findByIdAndUpdate(id, updateElpDto, { new: true });
        if (!elp)
            throw new common_1.NotFoundException('ELP not found');
        return elp;
    }
    async remove(id) {
        const result = await this.elpModel.findByIdAndDelete(id);
        if (!result)
            throw new common_1.NotFoundException('ELP not found');
    }
};
exports.ElpService = ElpService;
exports.ElpService = ElpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(elp_schema_1.Elp.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ElpService);
//# sourceMappingURL=elp.service.js.map