import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operator/retry';

//Interface
interface ItemsResponse {
  results: string[];
}

@Injectable()
export class DataService {

  results: any;

  constructor(private http: HttpClient) { }


  //GET All : Student
  getAllStudents(): Observable<any> {
    return this.http.get<string[]>('http://localhost:53811/api/Student/GetAllStudent');
    // .retry(3);
  }

  //GET BY ID : Student
  getStudentById(id: any): Observable<any> {

    return this.http.get('http://localhost:53811/api/Student/GetStudentById/',
      {
        params: new HttpParams().set('id', id)
      });

  }

  //POST : Student
  postStudent(registerStudent: any): Observable<any> {

    return this.http.post('http://localhost:53811/api/Student/AddStudent/',
      JSON.stringify(registerStudent),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }


  //PUT : Student
  putStudentById(id: any, updateStudent: any): Observable<any> {
    // return this.http.put('http://localhost:53811/api/Student/UpdateStudent/' + id,
    return this.http.put('http://localhost:53811/api/Student/UpdateStudent',
      JSON.stringify(updateStudent),
      {
        params: new HttpParams().set('id', id),
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin', 'http://localhost:5300')
          .set('Access-Control-Allow-Credentials', 'true')

      });

  }

  //DELETE : Student
  deleteStudentById(id: any): Observable<any> {
    return this.http.delete('http://localhost:53811/api/Student/DeleteStudentById/',
      {
        params: new HttpParams().set('id', id),
        headers: new HttpHeaders().set('Content-Type', 'application/json'),

      });

  }

}
