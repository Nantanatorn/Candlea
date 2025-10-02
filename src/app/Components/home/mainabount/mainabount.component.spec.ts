import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainabountComponent } from './mainabount.component';

describe('MainabountComponent', () => {
  let component: MainabountComponent;
  let fixture: ComponentFixture<MainabountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainabountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainabountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
