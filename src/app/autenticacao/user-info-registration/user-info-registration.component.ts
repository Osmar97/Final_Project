import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    {value: 'singular-0', viewValue: 'Singular'},
    {value: 'org-1', viewValue: 'Organização'},
  ];
}
