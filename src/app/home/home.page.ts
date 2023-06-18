import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos:any={};

    constructor(private pS:ProductosService, private ac:AlertController, private tc:ToastController) {
    this.pS.obtenerProductos().subscribe(
      (data)=>{
        this.productos=data;
        console.log(data);
      }
    )
   }

   mostrarAlerta() {
    this.presentAlert();
    }
   async presentAlert(){
    const alert = await this.ac.create({
      backdropDismiss: false, //esto hace que la alerta no se cierra cuando se da clic afuera
      header: 'Confirmar Compra', //titulo de la alerta
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{ //accion al dar clic en el boton cancelar
           console.log('Cancelar');
          },
        },
        {
          text:'Confirmar',
          role:'confirm',
          handler:()=>{ //accion al dar clic en el boton cancelar
           console.log('Ok!');
          },
        }
      ]
    });
    await alert.present(); //muestra lo construido
  }

  async mostrarToast( option:'top'){
    const toast = await this.tc.create({
      icon:'cart-outline',
      color:'success',
      message:'Agregado al carrito',
      duration: 1500,
      position:option
    });
    await toast.present();
  }

}
