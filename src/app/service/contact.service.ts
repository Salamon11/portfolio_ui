import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  sendMessage(contact: ContactMessage): Observable <any>{
    return this.http.post(`${this.apiUrl}/contact`, contact);
  }
}
