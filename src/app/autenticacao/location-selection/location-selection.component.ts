import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Distrito {
  value: string;
  viewValue: string;
  municipios: Municipio[];
}

interface Municipio {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-location-selection',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, FontAwesomeModule,CommonModule],
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent {

  faLock = faLock;

 
  constructor(private router: Router){}


  
  navegarLocationPermission() {
    // Navigate to the new route programmatically
    this.router.navigate(['/locationpermision']);
  }
  navegarUserInfo() {
    // Navigate to the new route programmatically
    this.router.navigate(['/registro/UserInfoRegistration']);
  }


 
}