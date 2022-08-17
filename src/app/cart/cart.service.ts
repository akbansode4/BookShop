import { Injectable } from '@angular/core';
import { Books } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Books[]=[];

  constructor() { }

  get(){
    return this.cart
  }
  add(book:Books){
    this.cart.push(book)
  }
  remove(book:Books){
    this.cart=this.cart.filter((b) => b != book)
  }
  
}
