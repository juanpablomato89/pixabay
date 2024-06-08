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
  listadoImagenes: any[] = [];
  loading = false;
  page = 1;
  perpage = 30
  totalpage = 0;

  constructor(private _imagenService: ImagenService) {
    this.subcription = _imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.page = 1;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  obtenerImagenes() {
    this.loading = true;
    this._imagenService.getImagenes(this.termino, this.page, this.perpage).subscribe(data => {
      this.loading = false;
      if (data.hits.length === 0) {
        this._imagenService.setError('Opsssss... No se encontro ningun resultado');
        return;
      }

      this.totalpage = Math.ceil(data.totalHits / this.perpage);

      this.listadoImagenes = data.hits;

    }, error => {
      this.loading = false;
      this._imagenService.setError('Opsss.. Ocurrio un error');
    })
  }

  addPage() {
    this.page++;
    this.obtenerImagenes();
  }

  subPage() {
    this.page--;
    this.obtenerImagenes();
  }

}
