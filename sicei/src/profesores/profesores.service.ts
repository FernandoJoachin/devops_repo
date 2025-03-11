import { Injectable } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { Profesor } from './interfaces/profesor.interface';

@Injectable()
export class ProfesoresService {

  private profesores : Profesor[] = [
    { numeroEmpleado: 'P11111', nombre: 'Luis Fernando Curi Quintal' },
    { numeroEmpleado: 'P22222', nombre: 'Eduardo Antonio Rodríguez González' },
    { numeroEmpleado: 'P33333', nombre: 'Edwin Jesús León Bojórquez'},
    { numeroEmpleado: 'P44444', nombre: 'Luis Ramiro Basto Díaz' },
    { numeroEmpleado: 'P55555', nombre: 'Víctor Hugo Menéndez Domínguez' },
  ];
  
  findAll() {
    return this.profesores;
  }
}
