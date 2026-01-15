"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MillInfoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const millinfo_service_1 = require("./millinfo.service");
const millinfo_controller_1 = require("./millinfo.controller");
const millinfo_schema_1 = require("./schema/millinfo.schema");
let MillInfoModule = class MillInfoModule {
};
exports.MillInfoModule = MillInfoModule;
exports.MillInfoModule = MillInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: millinfo_schema_1.MillInfo.name, schema: millinfo_schema_1.MillInfoSchema }])],
        controllers: [millinfo_controller_1.MillInfoController],
        providers: [millinfo_service_1.MillInfoService],
    })
], MillInfoModule);
//# sourceMappingURL=millinfo.module.js.map