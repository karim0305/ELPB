"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElpModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const elp_controller_1 = require("./elp.controller");
const elp_service_1 = require("./elp.service");
const elp_schema_1 = require("./schema/elp.schema");
let ElpModule = class ElpModule {
};
exports.ElpModule = ElpModule;
exports.ElpModule = ElpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: elp_schema_1.Elp.name, schema: elp_schema_1.ElpSchema },
            ]),
        ],
        controllers: [elp_controller_1.ElpController],
        providers: [elp_service_1.ElpService],
        exports: [elp_service_1.ElpService],
    })
], ElpModule);
//# sourceMappingURL=elp.module.js.map