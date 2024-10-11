import { Component } from '@angular/core';
import { Car } from '../../modules/test';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cars: Car[] = [
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

  ]
}

