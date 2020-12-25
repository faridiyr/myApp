import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items: any;
  itemId: string;
  searchJudul: string;

  constructor(private contentService: ContentService) {

  }

  ngOnInit() {
    this.contentService.search('a').subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }

  search(key: any) {
    this.searchJudul = key.target.value;
    this.contentService.search(this.searchJudul).subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }

  selectVal(val) {
    alert("you have selected = " + val);
  }

}
