import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AlertsModule } from 'angular-alert-module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ArticlesComponent } from './articles/articles.component';
import { ApiService } from './api.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ArticlePipe } from './article.pipe';
import { MostRepeatedArticleComponent } from './most-repeated-article/most-repeated-article.component';
import { HomeComponent } from './home/home.component';

const frontEndRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'products/create', component: CreateProductComponent },
  { path: 'articles/create', component: CreateArticleComponent },
  { path: 'articles/edit/:id', component: EditArticleComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'products/:id', component: ShowProductComponent },
  { path: 'articles/mostrepeated', component: MostRepeatedArticleComponent },
  { path: '', component: HomeComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ArticlesComponent,
    CreateProductComponent,
    CreateArticleComponent,
    EditArticleComponent,
    EditProductComponent,
    ShowProductComponent,
    ArticlePipe,
    MostRepeatedArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      frontEndRoutes,
       {enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
    AlertsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
