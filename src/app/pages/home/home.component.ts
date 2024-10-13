import { Component, Input, input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = "titulo"
  VerPaisajesRel(){
    alert("Ver mas paisajes relacionados")
  }
  VerOto(){
    alert("Ver mas Otoños")
  }
  GoToProducts(){
    window.location.href = '/products'
  }
}
