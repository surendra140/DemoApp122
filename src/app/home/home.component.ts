import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  productArray = [
    {
      prodId: 1,
      img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg",
      amt: 400,
      qnt: 2,
    },
    {
      prodId: 2,
      img: "https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg",
      amt: 500,
      qnt: 4,
    },
    {
      prodId: 3,
      img: "https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg",
      amt: 600,
      qnt: 5,
    },
    {
      prodId: 4,
      img: "https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg",
      amt: 700,
      qnt: 9,
    }
  ]

  bookArray:any=[];
  itemsCart:any =[]; 

  addCart(prod:any){
      
       // this.bookArray.push(prod);
       // console.log(this.bookArray);
        console.log(prod);
        let cartDataNull = localStorage.getItem('localCart');
        if(cartDataNull == null){
          let storeDataGet:any = [];
          storeDataGet.push(prod);
          localStorage.setItem('localCart', JSON.stringify(storeDataGet));
        }
        else{
          let index:number = 1;
          if(index == 1){
            this.itemsCart.push(prod);
            localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
          }
          else{
            localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
          }
        }
        
     
  }

  public data = this.bookArray;

  

}
