import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  nombreImagen = '';
  constructor(private _imagenService: ImagenService) { }

  ngOnInit(): void {
  }

  buscarImagenes() {
    if (this.nombreImagen === '') {
      this._imagenService.setError('Agrega un texto de busqueda');

    }
  }

}
