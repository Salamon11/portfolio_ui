import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage, ContactResponse } from '../model/contact.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(
      `${this.baseUrl}/api/contact`,   // ✅ IMPORTANT
      contact
    );
  }
}