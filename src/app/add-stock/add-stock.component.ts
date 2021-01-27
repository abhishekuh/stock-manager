import { Component, OnInit } from '@angular/core';
import { StockService } from "../stockService.service";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.sass']
})
export class AddStockComponent implements OnInit {

  stockName : String
  stockDate : Date
  stockPrice : Number

  constructor(private stockService:StockService) { }

  ngOnInit() {
  }

  saveStock(){
    const data = {
      stockName : this.stockName,
      stockDate : this.stockDate,
      stockPrice : this.stockPrice,
    }

    // console.log(data)
    this.stockService.saveStock(data).subscribe(res => {
      console.log(res)
    })
  }

}
