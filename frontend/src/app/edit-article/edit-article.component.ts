import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Object;
  dataForm: object;
  Id: any;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService

  ) {
    this.dataForm = {};
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Id = params['id']
      this.api.getData('/articles/edit/' + params['id']).subscribe(
        res => {
          this.article = res;
          this.dataForm = { name: res.name, number: res.number ,type: res.type };
        },
        err => {
        }
      )
    });
  }

  create(form: NgForm): void {
    if (form.valid) {
      this.api.putData('/articles/' + this.Id, this.dataForm).subscribe(
        res => {
          if (res == "success") {
            this.router.navigate(['/articles/']);
            this.alerts.setMessage('Successfully Updated!', 'success');
          }
        },
      )
    }
  }
}
