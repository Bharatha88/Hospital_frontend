import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElementComponent } from './edit-element.component';

describe('EditElementComponent', () => {
  let component: EditElementComponent;
  let fixture: ComponentFixture<EditElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditElementComponent]
    });
    fixture = TestBed.createComponent(EditElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
