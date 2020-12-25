import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl = 'https://pbpblog.000webhostapp.com/api/'

  constructor(private http: HttpClient) { }

  getRecentPost() {
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/Api/recent_post');
  }

  getAllPost() {
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/Api/post');
  }

  getDetailPost() {
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/Api/detail_post/');
  }

  getComment() {

  }

  search(name: string) {
    const url = this.baseUrl + 'search/' + name;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }
}