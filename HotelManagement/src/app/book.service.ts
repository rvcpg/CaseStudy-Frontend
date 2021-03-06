import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8082/';

  constructor(private http:HttpClient) { }

  getAllGuest(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+' getAllGuest');

  }


  addGuestList(guest: object) {

    return this.http.post<object>("http://localhost:8083/Guest/addGuest", guest);

  }




  deleteGuestById(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/deleteGuest/${id}`, { responseType: 'text' });

  }







  updateGuest(guest: object): Observable<object> {

    return this.http.put(`${this.baseUrl}`+'updateGuest',guest);

  }
}
