import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recentPost = [];

  constructor(private contentService: ContentService) {
    this.contentService.getRecentPost().subscribe(
      response => {
        this.recentPost = response;
      }
    )
  }
}
