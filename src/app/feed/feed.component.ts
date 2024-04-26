import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  isFeedActive: boolean = true;

  faPeopleGroup=faPeopleGroup;
  faRss = faRss;
  faMagnifyingGlass=faMagnifyingGlass;
  faMessage=faMessage;
  faRightFromBracket=faRightFromBracket;

  constructor() { }

  handleSearchClick() {

    console.log('Search icon clicked');
  }

  handleChatClick() {

    console.log('Chat icon clicked');
  }

  handleLogoutClick() {

    console.log('Logout icon clicked');
  }

  toggleFeed() {
    this.isFeedActive = true;
  }

  toggleArtigos() {
    this.isFeedActive = false;
  }
}
