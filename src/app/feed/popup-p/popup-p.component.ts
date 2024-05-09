import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup-p',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popup-p.component.html',
  styleUrl: './popup-p.component.scss'
})
export class PopupPComponent{

  title: string = "Publique o seu anúncio";
  postTitle: string = "";
  postType: string = "";
  postDescription: string = "";


  constructor(private subbtn:MatDialog){}

  attachImage() {
    
    console.log('Image attached!');
  }

  publishPost() {

    console.log('Post published!');
  }

  close(){
    this.subbtn.closeAll();

    
  }
}
