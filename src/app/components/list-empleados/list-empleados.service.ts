import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ListEmpleadosService {
  public arrayEmpleados = [
    {
      usuario: "diego.Gomez",
      Email: "Diego@gmail.com",
      nombres: "Diego",
      apellidos: "marin acosta",
      Activo: true,
      id: 1
    },
    {
      usuario: "andres.herrera",
      Email: "herrera@gmail.com",
      nombres: "andres felipe",
      apellidos: "herrera rodriguez",
      Activo: false,
      id: 2
    },
    {
      usuario: "diana.toro",
      Email: "diana.toro@gmail.com",
      nombres: "diana cristina",
      apellidos: "toro buitrago",
      Activo: true,
      id: 3
    },
    {
      usuario: "carlos.bello",
      Email: "carlos@gmail.com",
      nombres: "carlos andres",
      apellidos: "bello sinisterra",
      Activo: true,
      id: 4
    },
    {
      usuario: "salome.herrera",
      Email: "salome@gmail.com",
      nombres: "maria salome",
      apellidos: "herrera toro",
      Activo: true,
      id: 5
    },
    {
      usuario: "nicolas.ospína",
      Email: "nico@gmail.com",
      nombres: "nicolas",
      apellidos: "ospina rodriguez",
      Activo: true,
      id: 6
    }
  ]

  constructor() { }

  listarUsuarios() {
    return this.arrayEmpleados
  }
  edit(element: any, index: number) {
    console.log(this.arrayEmpleados[index]);
    console.log(element);
    
    this.arrayEmpleados[index] = element;

    return this.arrayEmpleados
  }
  add(element: any, index: number) {
    
    this.arrayEmpleados.push(element);

    return this.arrayEmpleados
  }
}
