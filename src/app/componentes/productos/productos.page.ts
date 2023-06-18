import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
contactos: any;

  constructor(private pS:ProductosService) {
    this.pS.obtenerProductos().subscribe(
      data=>{
        console.log(data);
      }
    )
   }

  ngOnInit() {
  }


}
