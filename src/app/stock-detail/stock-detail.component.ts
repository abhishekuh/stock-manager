import { Component, OnInit, ɵConsole } from '@angular/core';
import { StockService } from '../stockService.service';
import {ActivatedRoute} from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.sass']
})
export class StockDetailComponent implements OnInit {

  stockData
  stockLength

  public options: any = {
    chart: {
      type: 'bar',
      height: 400
    },
    title: {
      text: 'Stock Price'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) + ' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Price',
        turboThreshold: 500000,
        data: []
      },
      // {
      //   name: 'Abnormal',
      //   turboThreshold: 500000,
      //   data: [200,365]
      // }
    ]
  }

  constructor(private stockService:StockService,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    var stockID = this.route.snapshot.params['id'];
    this.getStockDetail(stockID)
    Highcharts.chart('container', this.options);
  }
  
  getStockDetail(stockID){
    this.stockService.getStockDetail(stockID).subscribe(res => {
      this.stockData = res
      console.log(res)
      this.prepareChartData(this.stockData)
      this.stockLength = this.stockData.length
      console.log(this.stockLength)
    })
  }
  
  prepareChartData(data){
    this.options.title.text = data.stockName
    var priceValues = []
    var stockInf = data.stockInfo
    stockInf.forEach(element => {
      priceValues.push(element.stockPrice)
    });
    this.options.series[0]['data'] = priceValues
    Highcharts.chart('container', this.options);
  }

}
