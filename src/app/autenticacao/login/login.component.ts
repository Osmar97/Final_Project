import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email:string='';
  password:string='';

  constructor(private router: Router,private authService: AutenticacaoService){}

  navegarRegistro() {
    // Navigate to the new route programmatically
    this.router.navigate(['/registro']);
  }
  

  token$!: Observable<any>;


  login(): void {
    this.token$ = this.authService.login(this.email, this.password);

    this.token$.subscribe({
      next: (value)=>{ 

        
        console.log('Observable emitted the next value: ' + value)
        this.authService.setCookie('token',value.token)
        this.router.navigate(['/feed']);

      },
      error: err => console.error('Observable emitted an error: ' + err),
    });
  }
}
