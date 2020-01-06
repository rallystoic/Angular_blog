import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpostcontentComponent } from './searchpostcontent.component';

describe('SearchpostcontentComponent', () => {
  let component: SearchpostcontentComponent;
  let fixture: ComponentFixture<SearchpostcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpostcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpostcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
