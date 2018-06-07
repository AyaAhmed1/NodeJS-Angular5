import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  response: Array<string>;
  searchText :string =null;

  constructor(
    private api: ApiService,
    private router: Router,
    private alerts: AlertsService,
  ) { }

  ngOnInit() {
    this.getArticles()
  }
  delete(url: string) {
    this.api.deleteData(url).subscribe(
      res => {
        this.getArticles()
        this.alerts.setMessage('Successfully Deleted!', 'success');
      },
    )
  }
  getArticles() {
    this.api.getData('/articles/').subscribe(
      res => {
        this.response = res;
      },
    )
  }
}
