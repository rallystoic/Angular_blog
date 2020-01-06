import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttitlesComponent } from './posttitles.component';

describe('PosttitlesComponent', () => {
  let component: PosttitlesComponent;
  let fixture: ComponentFixture<PosttitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
