import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  response: Array<string>;
  searchText: string = null;

  constructor(
    private api: ApiService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  delete(url: string) {
    this.api.deleteData(url).subscribe(
      res => {
        if (res == "success") {
          this.getProducts()
          this.alerts.setMessage('Successfully Deleted!', 'success');
        }
        else {
          this.alerts.setMessage("Can't be Deleted!", 'error');
        }
      },
      err => {
      }
    )
  }
  getProducts() {
    this.api.getData('/products').subscribe(
      res => {
        this.response = res;
      },
      err => {
      }
    )
  }
}
