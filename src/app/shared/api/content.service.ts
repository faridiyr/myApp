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
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/api/recent_post');
  }

  getAllPost() {
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/api/post');
  }

  getKategori() {
    return this.http.get<any[]>('https://pbpblog.000webhostapp.com/api/get_kategori');
  }

  getPostByKategori(id: string) {
    const url = this.baseUrl + 'post_by_kategori/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getDetailPost(id: string) {
    const url = this.baseUrl + 'detail_post/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getComment(id: string) {
    const url = this.baseUrl + 'get_comment/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  search(name: string) {
    const url = this.baseUrl + 'search/' + name;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }
}