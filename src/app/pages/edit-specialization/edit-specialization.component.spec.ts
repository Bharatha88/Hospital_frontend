import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecializationComponent } from './edit-specialization.component';

describe('EditSpecializationComponent', () => {
  let component: EditSpecializationComponent;
  let fixture: ComponentFixture<EditSpecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSpecializationComponent]
    });
    fixture = TestBed.createComponent(EditSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
