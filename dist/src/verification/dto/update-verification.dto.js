"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVerificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_verification_dto_1 = require("./create-verification.dto");
class UpdateVerificationDto extends (0, swagger_1.PartialType)(create_verification_dto_1.CreateVerificationDto) {
}
exports.UpdateVerificationDto = UpdateVerificationDto;
//# sourceMappingURL=update-verification.dto.js.map