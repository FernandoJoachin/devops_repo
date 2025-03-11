"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesoresService = void 0;
const common_1 = require("@nestjs/common");
let ProfesoresService = class ProfesoresService {
    constructor() {
        this.profesores = [
            { numeroEmpleado: 'P11111', nombre: 'Luis Fernando Curi Quintal' },
            { numeroEmpleado: 'P22222', nombre: 'Eduardo Antonio Rodríguez González' },
            { numeroEmpleado: 'P33333', nombre: 'Edwin Jesús León Bojórquez' },
            { numeroEmpleado: 'P44444', nombre: 'Luis Ramiro Basto Díaz' },
            { numeroEmpleado: 'P55555', nombre: 'Víctor Hugo Menéndez Domínguez' },
        ];
    }
    findAll() {
        return this.profesores;
    }
};
exports.ProfesoresService = ProfesoresService;
exports.ProfesoresService = ProfesoresService = __decorate([
    (0, common_1.Injectable)()
], ProfesoresService);
//# sourceMappingURL=profesores.service.js.map