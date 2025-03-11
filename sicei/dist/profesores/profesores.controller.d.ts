import { ProfesoresService } from './profesores.service';
export declare class ProfesoresController {
    private readonly profesoresService;
    constructor(profesoresService: ProfesoresService);
    findAll(): import("./interfaces/profesor.interface").Profesor[];
}
