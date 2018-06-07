import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-most-repeated-article',
  templateUrl: './most-repeated-article.component.html',
  styleUrls: ['./most-repeated-article.component.css']
})

export class MostRepeatedArticleComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  articles: Array<string>
  products: any
  article: Object;
  count: any
  constructor(
    private api: ApiService,
  ) {
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
    this.getProducts()
  }
  getArticles() {
    this.api.getData('/articles/').subscribe(
      res => {
        this.articles = res;
      },
    )
  }
  getProducts() {
    this.api.getData('/products').subscribe(
      res => {
        this.products = res;
      },
    )
  }
 
  findmax() {
    var map = new Map()
    var id;
    var max = 0;
    for (var i = 0; i < this.selectedItems.length; i++) {
      map.set(this.selectedItems[i]._id, 0)
    }
    for (var i = 0; i < this.products.length; i++) {
      for (var j = 0; j < this.products[i].articles.length; j++) {
        if (map.has(this.products[i].articles[j]._id)) {
          var val = map.get(this.products[i].articles[j]._id) + 1
          if(val >max){
            max=val
            id=this.products[i].articles[j]._id
          }
          map.set((this.products[i].articles[j]._id), val)
        }
      }
    }
  this.api.getData('/articles/'+ id).subscribe(
      res => {
        this.article = res;
       this.count=max
      },
    )
  }
  onSelectAll(items: any) {
  }
  onItemSelect(item: any) {
  }  
}
