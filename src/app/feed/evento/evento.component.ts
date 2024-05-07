import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.scss'
})
export class EventoComponent {


  @Input() postCreationDate: Date;

  constructor() {
      
      this.postCreationDate = new Date("2024-01-05T22:05:00");
  }
}