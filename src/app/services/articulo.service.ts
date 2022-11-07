import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private articulo:Articulo[];
  private carrito:Articulo[];
  
  constructor() { 
    this.articulo = [
      {
        id: (Math.floor(Math.random() * 10000) + 1).toString(),
        nombre: "Mouse Logitech",
        descripcion: "Rápido con lightspeed",
        precio: 1399,
        photo: "https://picsum.photos/500/?random=1",
        cant: 0
      },{
        id: (Math.floor(Math.random() * 10000) + 1).toString(),
        nombre: "Teclado Logitech",
        descripcion: "Teclado mecánico",
        precio: 2100,
        photo: "https://picsum.photos/500/?random=2",
        cant: 0
      },{
        id: (Math.floor(Math.random() * 10000) + 1).toString(),
        nombre: "Audifonos Logitech",
        descripcion: "Totalmente inalambricos",
        precio: 1899,
        photo: "https://picsum.photos/500/?random=3",
        cant: 0
      }
    ];
    this.carrito = [
      {
        id: " ",
        nombre: " ",
        descripcion: " ",
        precio: 0,
        photo: " ",
        cant: 0
      }];
    this.carrito.splice(0);
  }

  public getArticulos(): Articulo[]{
    return this.articulo;
  }

  public removeArticulos(pos:number){
    this.articulo.splice(pos, 1);
  }

  public addArticulos(nombre:string, descrip:string, precio:number, photo:string){
    this.articulo.push({
      id: (Math.floor(Math.random() * 10000) + 1).toString(),
      nombre: nombre,
      descripcion: descrip,
      precio: precio,
      photo: photo,
      cant: 0
    });
  }

  public removeCarro(pos:number){
    this.carrito.splice(pos, 1);
  }

  public getCarro(): Articulo[]{
    return this.carrito;
  }

  public getTotal(): Number{
    let total = 0;
    for (let i = 0; i < this.carrito.length; i++) {
      total += this.carrito[i].cant * this.carrito[i].precio;
    }
    return total;
  }

  public addCarro(pos:number){
    let posCar = this.posCarro(this.articulo[pos])
    if(posCar > -1){
      this.carrito[posCar].cant++;
    }else{
      this.carrito.push(this.articulo[pos]);
      this.carrito[this.carrito.length-1].cant = 1;
    }
  }

  private posCarro(art:Articulo): number{
    for (let i = 0; i < this.carrito.length; i++) {
      if(art.id == this.carrito[i].id){
        return i;
      }
    }
    return -1;
  }

  public restCarro(pos:number){
    if(this.carrito[pos].cant == 1){
      this.carrito.splice(pos, 1);
    }else{
      this.carrito[pos].cant--;
    }
  }

  public getArticuloByID(id: String): Articulo{
    let item: Articulo;
    item = this.articulo.find(
      (articulo)=> {
        return articulo.id==id;
      }
    );
    return item;
  }
}
