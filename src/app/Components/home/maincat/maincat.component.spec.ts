import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincatComponent } from './maincat.component';

describe('MaincatComponent', () => {
  let component: MaincatComponent;
  let fixture: ComponentFixture<MaincatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaincatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
