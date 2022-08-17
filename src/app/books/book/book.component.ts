import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Books } from 'src/app/types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {  
  @Input() book:Books={} as Books;
  isInCart:boolean=true;
  
  constructor(private cartService:CartService) {}
  ngOnInit(): void {}  
  ngOnDestroy(): void {}

  addToCart(){
    this.isInCart=false;
    this.cartService.add(this.book)
    console.log("cart", this.cartService.cart)
  }
  removeFromCart(){
    this.isInCart=true;
    this.cartService.remove(this.book )
  }

}
