import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Object;
  dataForm: object;
  Id: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  articles:Array<string>
  name :any
  number :any
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService

  ) {
    this.dataForm = {};
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
    this.productData()
    this.getArticles()
  }
onItemSelect(item:any){
}
onSelectAll(items: any){
}
  productData() {
    this.route.params.subscribe(params => {
    this.Id=params['id']
      this.api.getData('/products/edit/' + params['id']).subscribe(
        res => {
          this.product = res;
          this.name=res.name
          this.number=res.number
        },
      )
    });
  }
  getArticles() {
    this.api.getData('/articles/').subscribe(
      res => {
        this.articles = res;
      },
    )
  }
  edit(form: NgForm): void {
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
    console.log(this.dataForm)
      this.api.putData('/products/' + this.Id, this.dataForm).subscribe(
        res => {
          console.log(res)
          if (res == "success") {
            this.router.navigate(['/products/']);
            this.alerts.setMessage('Successfully Updated!', 'success');
          }
        },
      )
    }
  }
}
