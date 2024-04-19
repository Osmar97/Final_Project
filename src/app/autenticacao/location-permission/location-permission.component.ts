import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-permission',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './location-permission.component.html',
  styleUrl: './location-permission.component.scss'
})
export class LocationPermissionComponent {

  faLock = faLock;

}
