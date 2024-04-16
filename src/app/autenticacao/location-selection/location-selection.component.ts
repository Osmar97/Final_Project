import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Distrito {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-selection',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './location-selection.component.html',
  styleUrl: './location-selection.component.scss'
})
export class LocationSelectionComponent {

  distritos: Distrito[] = [
    { value: 'aveiro', viewValue: 'Aveiro' },
    { value: 'beja', viewValue: 'Beja' },
    { value: 'braga', viewValue: 'Braga' },
    { value: 'braganca', viewValue: 'Bragança' },
    { value: 'castelo-branco', viewValue: 'Castelo Branco' },
    { value: 'coimbra', viewValue: 'Coimbra' },
    { value: 'evora', viewValue: 'Évora' },
    { value: 'faro', viewValue: 'Faro' },
    { value: 'guarda', viewValue: 'Guarda' },
    { value: 'leiria', viewValue: 'Leiria' },
    { value: 'lisboa', viewValue: 'Lisboa' },
    { value: 'portalegre', viewValue: 'Portalegre' },
    { value: 'porto', viewValue: 'Porto' },
    { value: 'santarem', viewValue: 'Santarém' },
    { value: 'setubal', viewValue: 'Setúbal' },
    { value: 'viana-do-castelo', viewValue: 'Viana do Castelo' },
    { value: 'vila-real', viewValue: 'Vila Real' },
    { value: 'viseu', viewValue: 'Viseu' },
    { value: 'acores', viewValue: 'Açores' },
    { value: 'madeira', viewValue: 'Madeira' }
  ];
}

