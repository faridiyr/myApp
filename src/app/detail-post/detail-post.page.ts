import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.page.html',
  styleUrls: ['./detail-post.page.scss'],
})
export class DetailPostPage implements OnInit {
  id;
  item: null;
  item_comment: [];
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contentService.getDetailPost(id).subscribe(response => {
      this.item = response;
    });
    this.contentService.getComment(id).subscribe(response => {
      this.item_comment = response;
    });
  }

}
