import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allPost = [];

  constructor(private contentService: ContentService) {
    this.contentService.getAllPost().subscribe(
      response => {
        this.allPost = response;
      }
    )
  }
}
