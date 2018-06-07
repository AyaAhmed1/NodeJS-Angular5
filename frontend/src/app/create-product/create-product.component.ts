import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  dataForm: object;
  articles: Array<string>
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  name: any
  number: any
  constructor(
    private api: ApiService,
    private router: Router,
    private alerts: AlertsService

  ) {
    this.dataForm = {}
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  ngOnInit() {
    this.getArticles()
  }
  onItemSelect(item:any){
}
onSelectAll(items: any){
}

  getArticles() {
    this.api.getData('/articles/').subscribe(
      res => {
        this.articles = res;
      },
    )
  }
  create(form: NgForm): void {
    if (form.valid) {
      var art = []
      if(this.selectedItems.length != 0){
      for (var i = 0; i < this.selectedItems.length; i++) {
        art.push(this.selectedItems[i]._id)
      }
      this.dataForm = { name: this.name, number: this.number, articles: art };
    }
    else{
      this.dataForm = { name: this.name, number: this.number };
    }
      this.api.postData('/products', this.dataForm).subscribe(
        res => {
          if (res == "success") {
           this.router.navigate(['/products/']);
            this.alerts.setMessage('Successfully Created!', 'success');
          }
          else {
            this.alerts.setMessage('Product Number not unique ,Try again!', 'error');
          }
        },
      )
    }
  }
}
