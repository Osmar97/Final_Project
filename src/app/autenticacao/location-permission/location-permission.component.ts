import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router){}

  navegarLocationSelection() {
    // Navigate to the new route programmatically
    this.router.navigate(['/LocationSelection']);
  }
  navegarFeed() {
    // Navigate to the new route programmatically
    this.router.navigate(['/feed']);
  }
}
