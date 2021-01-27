import { Component, OnInit } from '@angular/core';
import { StockService } from '../stockService.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.sass']
})
export class StockDetailComponent implements OnInit {

  stockData

  constructor(private stockService:StockService,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    var stockID = this.route.snapshot.params['id'];
    console.log(stockID)
    this.getStockDetail(stockID)
  }

  getStockDetail(stockID){
    this.stockService.getStockDetail(stockID).subscribe(res => {
      this.stockData = res
      console.log(res)
    })
  }

}
