import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return[{
      Name: 'Clean Code in Python',
      Author: 'Mariano Anaya',
      Img: "https://images-na.ssl-images-amazon.com/images/I/51j-9Zz-rHL._SX404_BO1,204,203,200_.jpg",
      Amount: 500
    },
    {
      Name: 'Software Engineering',
      Author: 'Andrew Bird',
      Img: "https://images-na.ssl-images-amazon.com/images/I/51af1q9bgLL._SX404_BO1,204,203,200_.jpg",
      Amount: 600
    },
    {Name: 'RESTful API',
    Author: ' Pethuru Raj Subramanian',
    Img: "https://images-na.ssl-images-amazon.com/images/I/51hXG9mIRyL._SX404_BO1,204,203,200_.jpg",
    Amount: 700
      },
      {
      Name: 'The JavaScript',
    Author: 'Joseph Labrecque',
    Img: "https://images-na.ssl-images-amazon.com/images/I/51fg7kJAazL._SX404_BO1,204,203,200_.jpg",
    Amount: 700
      },
      {
        Name: "Data Structures",
        Author: "Narasimha Karumanchi",
        Img: "https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg",
        Amount: 500
  
      },
      {
        Name: "Design Patterns",
        Author: "Erich Gamma",
        Img: "https://images-na.ssl-images-amazon.com/images/I/51DIF9CTroL._SX361_BO1,204,203,200_.jpg",
        Amount: 600
      },
      {
        Name: "Automate Python",
        Author: "Manaranjan Pradhan",
        Img: "https://images-eu.ssl-images-amazon.com/images/I/51B161E04DL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        Amount: 700
      },
      {
        Name: "Machine Learning",
        Author: "Nathan Clark",
        Img: "https://images-na.ssl-images-amazon.com/images/I/51bffNVIcmL._SX385_BO1,204,203,200_.jpg",
        Amount: 750
      }
    ];
  }
}
