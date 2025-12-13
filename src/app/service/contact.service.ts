import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage, ContactResponse } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8081/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, contact);
  }
}
