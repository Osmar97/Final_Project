import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library for decoding JWT tokens

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

 

  // Function to redirect to the user page if the token is valid
  public redirectToUserPageIfValid(): void {

    let res$:Observable<any>=this.authService.loginJWT()

    res$.subscribe({
      next:(val)=>{
        console.log(val)
        this.router.navigate(['/feed']); // Navigate to the user page

      },
      error:(err)=>console.error(err)
    })

   
  }
  ngAfterViewInit():void{

    if(this.authService.getCookie('token'))
      this.redirectToUserPageIfValid()


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
