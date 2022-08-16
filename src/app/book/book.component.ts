import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Books } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {  
  @Input() book:Books={} as Books;
  @Output() bookEmitter = new EventEmitter<Books>();
  
  constructor() {}
  ngOnInit(): void {}  
  ngOnDestroy(): void {}

  addToCart(){
    this.bookEmitter.emit(this.book)
  }

}
