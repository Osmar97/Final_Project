import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';


interface Usuario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-info-registration',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './user-info-registration.component.html',
  styleUrl: './user-info-registration.component.scss'
})
export class UserInfoRegistrationComponent {

  usuarios: Usuario[] = [
    { value: 'singular-0', viewValue: 'Singular' },
    { value: 'org-1', viewValue: 'Organização' },
  ];

  nome!: string;
  nif!: number;
  tipoUser!: string;

  utilizador!: any

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      
      try {
        this.utilizador = JSON.parse(String(localStorage.getItem('user')))
        if (this.utilizador.nome!='')
          this.nome = this.utilizador.nome;
        if (this.utilizador.nif != 0)
          this.nif = this.utilizador.nif;
        if (this.utilizador.tipoUser)
          this.tipoUser = this.utilizador.tipoUser
  
      } catch (e) {
      }
    }, 100);
  }

  navegarLocationSelection() {
    // Navigate to the new route programmatically
    this.router.navigate(['/LocationSelection']);
  }
  navegarRegistro() {
    // Navigate to the new route programmatically
    this.router.navigate(['/registro']);
  }

  loginUserInfo(): void {

    if (this.nif != 0 && this.nome != '') {

      this.utilizador.nome = this.nome
      this.utilizador.nif = this.nif
      this.utilizador.tipoUser = this.tipoUser


      localStorage.setItem('user', JSON.stringify(this.utilizador))

      this.router.navigate(['/LocationSelection']);

    } else {

      console.log('Palavras passe nao coincidem')

    }

  }
}
