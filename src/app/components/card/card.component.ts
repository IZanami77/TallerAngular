import { Component, Input, signal } from '@angular/core';
import { Productos, Usuario } from '../../modules/test';
import { __values } from 'tslib';

type Data = {
  data:Productos | Usuario
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text = signal('');
  @Input() data!: Data
  @Input() ClickEvento!:() => void

  onChange(event: any){
    this.text.set(event.target.value);
    this.data.data.description = this.text();
  }

  OnClick(){
    console.log(this.data.data);
  }
}
