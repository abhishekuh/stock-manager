import { Component, OnInit } from '@angular/core';
import { StockService } from '../stockService.service';
import { UserService } from "../userService.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  users: Object;
  stocks

  constructor(private userService:UserService,private stockService:StockService) {  
  }

  ngOnInit() {
    let users = []
    this.getUsers()
    this.getAllStocks()
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(res=> {
      this.users = res
    })
  }

  getAllStocks() {
    this.stockService.getAllStocks().subscribe(res=> {
      this.stocks = res
    })
  }

}
