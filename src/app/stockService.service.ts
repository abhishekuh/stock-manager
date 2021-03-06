import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
// import { RequestOptions, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root',
})

export class StockService {

    url = 'http://34.245.126.18/'

    constructor(private http:HttpClient){
    }

    saveStock(data){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'my-auth-token'
          })
        };
        return this.http.post(this.url+'/stock/createStock',data,httpOptions)
    }

    getAllStocks(){
      return this.http.get(this.url+'/stock/getAllStocks')
    }

    getStockDetail(id){
      return this.http.get(this.url+'/stock/getStockDetail',{params:{id:id}})
    }
   
}