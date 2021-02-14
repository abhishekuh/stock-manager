import { Component, OnInit } from '@angular/core';
import { StockService } from "../stockService.service";
import { FormArray,FormBuilder,FormGroup,FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.sass']
})
export class AddStockComponent implements OnInit {
  addStockForm : FormGroup
  stockName : String
  stockDate : any
  stockPrice : Number
  stockArray : any

  

  constructor(private stockService:StockService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.addStockForm = this.fb.group({
      stockName: [''],
      stockInfo: this.fb.array([
        this.addnewFormGroup()
      ])
    });
    
  }

  addnewFormGroup(){
    return this.fb.group({
      stockDate: [''],
      stockPrice: [''],
    })
  }

  addNewEntry(){
    (<FormArray>this.addStockForm.get('stockInfo')).push(this.addnewFormGroup())
  }

  onClickSubmit(){
    // const data = {
    //   stockName : this.stockName,
    //   detail : this.stockArray,
    // }
    const data = this.addStockForm.value
    console.log(data)
    this.stockService.saveStock(data).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('/home')
    })
  }

}
