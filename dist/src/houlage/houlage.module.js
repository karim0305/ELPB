"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaulageModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const houlage_schema_1 = require("./schema/houlage.schema");
const houlage_service_1 = require("./houlage.service");
const houlage_controller_1 = require("./houlage.controller");
let HaulageModule = class HaulageModule {
};
exports.HaulageModule = HaulageModule;
exports.HaulageModule = HaulageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: houlage_schema_1.Haulage.name, schema: houlage_schema_1.HaulageSchema },
            ]),
        ],
        controllers: [houlage_controller_1.HaulageController],
        providers: [houlage_service_1.HaulageService],
    })
], HaulageModule);
//# sourceMappingURL=houlage.module.js.map