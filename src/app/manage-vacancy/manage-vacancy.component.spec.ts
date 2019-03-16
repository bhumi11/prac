import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVacancyComponent } from './manage-vacancy.component';

describe('ManageVacancyComponent', () => {
  let component: ManageVacancyComponent;
  let fixture: ComponentFixture<ManageVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
