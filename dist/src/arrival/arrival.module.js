"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrivalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const arrival_service_1 = require("./arrival.service");
const arrival_controller_1 = require("./arrival.controller");
const arrival_schema_1 = require("./schema/arrival.schema");
let ArrivalModule = class ArrivalModule {
};
exports.ArrivalModule = ArrivalModule;
exports.ArrivalModule = ArrivalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: arrival_schema_1.Arrival.name, schema: arrival_schema_1.ArrivalSchema }]),
        ],
        controllers: [arrival_controller_1.ArrivalController],
        providers: [arrival_service_1.ArrivalService],
        exports: [arrival_service_1.ArrivalService],
    })
], ArrivalModule);
//# sourceMappingURL=arrival.module.js.map