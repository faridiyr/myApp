import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  kategori = [];
  selectedVal: String;
  item_kategori: any;
  item_post_by_kategori: any;
  id_kategori: string;

  constructor(private contentService: ContentService, private platform: Platform) {
    this.contentService.getKategori().subscribe(
      response => {
        this.kategori = response;
      }
    )
  }

  OnChange(event) {
    this.id_kategori = event.target.value;
    this.contentService.getPostByKategori(this.id_kategori).subscribe(response => {
      this.item_post_by_kategori = response;
      console.log(this.item_post_by_kategori);
    });
  }
}
