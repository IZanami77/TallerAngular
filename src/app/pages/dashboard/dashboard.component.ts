import { Component } from '@angular/core';
import { Usuario } from '../../modules/test';
import { HomeComponent } from "../home/home.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



  usuarios:Usuario[] = [
    {
      id:1,
      name: 'Braulio Martinez',
      description: 'Cliente estrella',
      rol:{rol:'Cliente'}
    },
    {
      id:2,
      name: 'Gael Hernandez',
      description: 'Administrador de redes',
      rol:{rol:'Admin'} 
    }
  ]
  /*cars: Car[] = [
    {
      model: 'Mazda',
      color: 'Red',
      wheels: 4,
      doors: 4,
      year: '2010'
    },
    {
      model: 'Ford',
      color: 'White',
      wheels: 4,
      doors: 4,
      year: '2002'
    }

  ]*/
}

