import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Person from './Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private url: string = 'http://127.0.0.1:8000/person';

  constructor(private http: HttpClient) { }

  // Get Person
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + '/');
  }

  // Get Person By Id
  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(this.url + '/' + id);
  }

  // Add Person
  addPerson(person: Person): Observable<Person> {
    console.log(person);
    return this.http.post<Person>(this.url + '/', person);
  }

  // Update Person
  updatePerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(this.url + '/' + id + '/', person);
  }

  // Delete Person
  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(this.url + '/' + id);
  }

  // Calculate peso ideal
  calculateIdealWeight(id: number): Observable<Person> {
    return this.http.get<Person>(this.url + '/peso-ideal/' + id + '/');
  }
}
