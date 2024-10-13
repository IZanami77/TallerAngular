import { Component, Input, signal } from '@angular/core';
import { Productos } from '../../modules/test';
import { __values } from 'tslib';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text = signal('');
  @Input() productos!: Productos
  @Input() ClickEvento!:() => void

  onChange(event: any){
    this.text.set(event.target.value);
    this.productos.description = this.text();
  }

  OnClick(){
    this.ClickEvento();
  }
}
