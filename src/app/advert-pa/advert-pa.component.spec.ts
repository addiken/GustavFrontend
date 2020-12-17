import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPaComponent } from './advert-pa.component';

describe('AdvertPaComponent', () => {
  let component: AdvertPaComponent;
  let fixture: ComponentFixture<AdvertPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
