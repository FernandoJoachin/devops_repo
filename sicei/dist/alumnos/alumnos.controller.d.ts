import { AlumnosService } from './alumnos.service';
export declare class AlumnosController {
    private readonly alumnosService;
    constructor(alumnosService: AlumnosService);
    findAll(): import("./interfaces/alumno.interface").Alumno[];
}
