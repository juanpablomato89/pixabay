import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {

  termino = '';
  subcription: Subscription;
  constructor(private _imagenService: ImagenService) {
    this.subcription = _imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  obtenerImagenes() {
    this._imagenService.getImagenes(this.termino).subscribe(data => {
      console.log(data);

      if (data.hits.length === 0) {
        this._imagenService.setError('Opsssss... No se encontro ningun resultado');
        return;
      }

    }, error => {
      this._imagenService.setError('Opsss.. Ocurrio un error');
    })
  }

}
