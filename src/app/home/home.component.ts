import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onCreatePost(postData: { title: string; content: string }): void {
    this.http.post('https://angulartest-2c400-default-rtdb.firebaseio.com/posts.json', postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPosts(): void {
    this.http.get('https://angulartest-2c400-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders(
          {
            'custom-header': 'gamarjoba'
          }),
        params: new HttpParams().set('print', 'dato')
      })
      .pipe(map((responseData) => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }))
      .subscribe((responseData) => {
        this.loadedPosts = responseData;
      });
  }

  onClearPosts(): void {

  }
}
