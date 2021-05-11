import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    Swal.fire({
      showCancelButton: true,
      text: 'Hola he cargado correctamente',
      icon: 'success',
      title: 'Exito'
    }).then(respuesta => {
      if (respuesta.isDismissed) {
        console.log('cancele');
      }
      if (respuesta.isConfirmed) {
        console.log('acepte');
      }
    });
  }

  accion() {
    Swal.fire('Hola mundo');
  }
}
