import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private email_url: string = "http://localhost:8181/email";

  constructor(private http: HttpClient) { }

  send_email(data: any) {
      return this.http.post(`${this.email_url}/sendMail`,data,{responseType:"text"});
  }

}