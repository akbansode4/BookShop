import { Component, OnInit } from '@angular/core';
import { Books } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Books: Books[] = [];
  constructor(private booksService: BooksService) { }
  cart:Books[]=[];

  ngOnInit(): void {
    this.Books = this.booksService.getBooks();
  }
  isShowing:boolean=true;
  addToCart(book:Books){
    console.log(book)
  }

}
