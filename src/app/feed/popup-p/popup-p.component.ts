import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  attachImage() {
    // Add your logic for attaching an image here
    console.log('Image attached!');
  }

  publishPost() {
    // Add your logic for publishing the post here
    console.log('Post published!');
  }

}
