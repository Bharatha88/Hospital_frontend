import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillComponent } from './edit-bill.component';

describe('EditBillComponent', () => {
  let component: EditBillComponent;
  let fixture: ComponentFixture<EditBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBillComponent]
    });
    fixture = TestBed.createComponent(EditBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
