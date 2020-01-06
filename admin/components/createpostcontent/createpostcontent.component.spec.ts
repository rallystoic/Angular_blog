import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepostcontentComponent } from './createpostcontent.component';

describe('CreatepostcontentComponent', () => {
  let component: CreatepostcontentComponent;
  let fixture: ComponentFixture<CreatepostcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepostcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepostcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
