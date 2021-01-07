import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsColumnRendererComponent } from './actions-column-renderer.component';

describe('ActionsColumnRendererComponent', () => {
  let component: ActionsColumnRendererComponent;
  let fixture: ComponentFixture<ActionsColumnRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsColumnRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsColumnRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
