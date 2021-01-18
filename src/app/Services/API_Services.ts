import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class ApiServices {
  baseUri = "http://localhost:3000/api"
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
  }

  private loggedIns: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIns.asObservable();
  }
 
    getUser(): Observable<any> {
      const url = `${this.baseUri}/user/GetUser`;
      return this.http.get(url)
        .pipe(
          catchError(this.errorMgmt)
        );
    }
    uploadFile(data): Observable<any> {
        const url = `${this.baseUri}/user/upload`;
        return this.http.post(url, data, {
          reportProgress: true,
          observe: 'events'
        })
          .pipe(
            catchError(this.errorMgmt)
          );
    
      }
    createuser(data): Observable<any> {
        
          const url = `${this.baseUri}/user/register`;
          return this.http.post(url, data).pipe(catchError(this.errorMgmt));
        
         
      }
      updateUser(data,id): Observable<any> {
        
        const url = `${this.baseUri}/user/register/${id}`;
        return this.http.put(url, data).pipe(catchError(this.errorMgmt));
      
       
    }
      loggedin() {
        if (localStorage.getItem('token') === localStorage.getItem('authToken')) {
          if(!!localStorage.getItem('token')) {
            if(!!localStorage.getItem('authToken')) {
            this.loggedIns.next(true);
            return true;
          }
        }
          
        } else {
          this.loggedIns.next(false);
          return false;
        }
      }
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('Usertype');
        localStorage.removeItem('authToken');
        localStorage.removeItem('id');
        this.loggedIns.next(false);
      }


      // login
  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUri}/user/login`;
    return this.http.post(url, { email, password })
      .pipe(
        catchError(this.errorMgmt)
      );

  }
     // Error handling
     errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}