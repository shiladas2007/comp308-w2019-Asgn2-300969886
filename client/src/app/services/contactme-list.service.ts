
// Created by: Shila Rani Das (300969886) 30 Mar 2019
// this file read/ send message from others from/to the API
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contactme } from '../models/contactme';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactmeListService {
  private user: User;
  private authToken: any = null;
  private endpoint = 'https://comp308-w2019-asgn2-300969886.herokuapp.com/api/contactme-list/';
  //private endpoint = 'http://localhost:3000/api/contactme-list/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
   }
   public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
  public addContactme(contactme: Contactme): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add', contactme, this.httpOptions);
  }
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}
