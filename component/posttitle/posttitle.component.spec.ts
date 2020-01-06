import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttitleComponent } from './posttitle.component';

describe('PosttitleComponent', () => {
  let component: PosttitleComponent;
  let fixture: ComponentFixture<PosttitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
