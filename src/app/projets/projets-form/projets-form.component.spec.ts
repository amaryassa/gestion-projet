import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsFormComponent } from './projets-form.component';

describe('ProjetsFormComponent', () => {
  let component: ProjetsFormComponent;
  let fixture: ComponentFixture<ProjetsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
