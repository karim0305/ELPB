"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateElpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_elp_dto_1 = require("./create-elp.dto");
class UpdateElpDto extends (0, swagger_1.PartialType)(create_elp_dto_1.CreateElpDto) {
}
exports.UpdateElpDto = UpdateElpDto;
//# sourceMappingURL=update-elp.dto.js.map