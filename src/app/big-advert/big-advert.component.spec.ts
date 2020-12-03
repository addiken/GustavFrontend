import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAdvertComponent } from './big-advert.component';

describe('BigAdvertComponent', () => {
  let component: BigAdvertComponent;
  let fixture: ComponentFixture<BigAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
