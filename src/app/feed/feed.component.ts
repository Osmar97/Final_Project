import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { EventoComponent } from './evento/evento.component';
import {MatDialogModule} from '@angular/material/dialog'




@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FontAwesomeModule, EventoComponent , MatDialogModule],
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
  faPaperPlane=faPaperPlane;
  faPaperclip=faPaperclip;

  constructor() { }

  handleSendClick(){
    console.log('send icon clicked');
  }

  handleAttachClick(){
    console.log('Attach icon clicked');
  }

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
    console.log("Feed is active");
}

toggleArtigos() {
    this.isFeedActive = false;
    console.log("Artigos are active");
}

}