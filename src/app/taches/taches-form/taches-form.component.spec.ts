import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesFormComponent } from './taches-form.component';

describe('TachesFormComponent', () => {
  let component: TachesFormComponent;
  let fixture: ComponentFixture<TachesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
