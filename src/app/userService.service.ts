import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    url = 'http://34.245.126.18/'

    constructor(private http:HttpClient){
    }

    getAllUsers(){
        return this.http.get(this.url+'/user/getUser')
    }

    
}