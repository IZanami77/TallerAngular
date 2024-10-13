import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../modules/test';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos: Productos[] = [
    {
      name: "Grape Juice",
      description: "Drinkable juice",
      price: 9.99,
      img: "/image/Grape_juice.jpg"
    },
    {
      name: "Apple Juice",
      description: "Drinkable juice",
      price: 9.99,
      img: "/image/Apple-Juice.jpeg"
    },
    {
      name: "Mango Juice",
      description: "Drinkable juice",
      price: 9.99,
      img: "/image/mango-Juice.jpg"
    }
  ];
}
