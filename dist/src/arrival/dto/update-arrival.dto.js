"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArrivalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_arrival_dto_1 = require("./create-arrival.dto");
class UpdateArrivalDto extends (0, swagger_1.PartialType)(create_arrival_dto_1.CreateArrivalDto) {
}
exports.UpdateArrivalDto = UpdateArrivalDto;
//# sourceMappingURL=update-arrival.dto.js.map