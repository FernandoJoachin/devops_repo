import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './interfaces/alumno.interface';

@Injectable()
export class AlumnosService {
  private alumnos : Alumno[] = [
    { matricula: "18000621", nombre: "Fernando Joachin Prieto" },
    { matricula: "17003931", nombre: "Reyna Valentina Ortiz Porras" },
    { matricula: "21216409", nombre: "Diego Alberto Alamilla Osorio" },
    { matricula: "21216389", nombre: "José Carlos Leo Fernández" },
    { matricula: "18001347",  nombre: "Carlos Augusto May Vivas"}
  ];

  findAll() {
    return this.alumnos;
  }
}
