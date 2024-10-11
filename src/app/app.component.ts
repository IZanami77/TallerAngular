import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "titulo"
  VerPaisajesRel(){
    alert("Ver mas paisajes relacionados")
  }
  VerOto(){
    alert("Ver mas Otoños")
  }
}
