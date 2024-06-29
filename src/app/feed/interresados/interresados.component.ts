import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interresados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interresados.component.html',
  styleUrl: './interresados.component.scss'
})
export class InterresadosComponent {

  showbox: boolean = false;

  @Input('post') post:any;

  togglebox() {
    this.showbox = !this.showbox;
  }
  
  close(){
    console.log(this.post);
    (document.getElementById('interessados-popup') as HTMLElement).style.display='none';

  }
}
