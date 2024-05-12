import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  @Input() postCreationDate: Date;

  selectedOption: string;

  constructor(private fechar:MatDialog ){

    this.selectedOption = 'artigos';

    
    this.postCreationDate = new Date("2024-01-05T22:05:00");
  }

  selectOption(option: string) {
  
    this.selectedOption = option;
  }

  close(){
    this.fechar.closeAll();

  }
}
