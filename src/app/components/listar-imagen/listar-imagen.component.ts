import { Component, OnInit } from '@angular/core';
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
    })
  }

  ngOnInit(): void {
  }

}
