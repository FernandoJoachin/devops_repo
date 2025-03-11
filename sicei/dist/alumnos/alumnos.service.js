"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosService = void 0;
const common_1 = require("@nestjs/common");
let AlumnosService = class AlumnosService {
    constructor() {
        this.alumnos = [
            { matricula: "18000621", nombre: "Fernando Joachin Prieto" },
            { matricula: "17003931", nombre: "Reyna Valentina Ortiz Porras" },
            { matricula: "21216409", nombre: "Diego Alberto Alamilla Osorio" },
            { matricula: "21216389", nombre: "José Carlos Leo Fernández" },
            { matricula: "18001347", nombre: "Carlos Augusto May Vivas" }
        ];
    }
    findAll() {
        return this.alumnos;
    }
};
exports.AlumnosService = AlumnosService;
exports.AlumnosService = AlumnosService = __decorate([
    (0, common_1.Injectable)()
], AlumnosService);
//# sourceMappingURL=alumnos.service.js.map