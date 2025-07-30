import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
