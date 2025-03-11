"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfesoreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_profesore_dto_1 = require("./create-profesore.dto");
class UpdateProfesoreDto extends (0, mapped_types_1.PartialType)(create_profesore_dto_1.CreateProfesoreDto) {
}
exports.UpdateProfesoreDto = UpdateProfesoreDto;
//# sourceMappingURL=update-profesore.dto.js.map