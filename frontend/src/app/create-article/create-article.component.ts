import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  dataForm: object;
  constructor(
    private api: ApiService,
    private router: Router,
    private alerts: AlertsService

  ) {
    this.dataForm = {};
  }

  ngOnInit() {
  }
  create(form: NgForm): void {
    if (form.valid) {
      this.api.postData('/articles', this.dataForm).subscribe(
        res => {
          if (res == "success") {
            this.router.navigate(['/articles/']);
            this.alerts.setMessage('Successfully Created!', 'success');
          }
          
          else{
            this.alerts.setMessage('Article Number not unique ,Try again!', 'error');
          }
        },
      )
    }
  }
}
