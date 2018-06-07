import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRepeatedArticleComponent } from './most-repeated-article.component';

describe('MostRepeatedArticleComponent', () => {
  let component: MostRepeatedArticleComponent;
  let fixture: ComponentFixture<MostRepeatedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRepeatedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRepeatedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
