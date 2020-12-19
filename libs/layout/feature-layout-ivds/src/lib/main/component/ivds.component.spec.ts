import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvdsComponent } from './ivds.component';

describe('IvdsComponent', () => {
  let component: IvdsComponent;
  let fixture: ComponentFixture<IvdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
