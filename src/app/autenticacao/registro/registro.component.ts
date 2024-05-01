import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements AfterViewInit{

  email: string = '';
  password: string = '';
  passwordConfirm: String = ''
  registro$!: Observable<String>;
  usuario: any ={
    "nome": "",
    "nif":0,
    "tipoUser": "",
    "email": "",
    "password": "",
    "coordenadasMorada": "",
    "id_dist": 0,
    "id_munic": 0

  };


  constructor(private router: Router, private authService: AutenticacaoService) { }

  navegarLogin() {
    // Navigate to the new route programmatically
    this.router.navigate(['/login']);
  }

  ngAfterViewInit():void{
    try{
      setTimeout(() => {
        this.email=JSON.parse(String(localStorage.getItem('user'))).email
      }, 100);
    }catch(e){
    }
  }
  
  registrarEmailEPass(): void {

    if (this.password == this.passwordConfirm && this.password!='' && this.passwordConfirm!='') {

      this.usuario.email= this.email;
      this.usuario.password = this.password;
       
      localStorage.setItem('user',JSON.stringify(this.usuario))

      this.router.navigate(['/registro/UserInfoRegistration']);

    }else{

      console.log('Palavras passe nao coincidem')

    }

  }
 

}
