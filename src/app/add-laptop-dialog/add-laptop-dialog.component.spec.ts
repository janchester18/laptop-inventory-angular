import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaptopDialogComponent } from './add-laptop-dialog.component';

describe('AddLaptopDialogComponent', () => {
  let component: AddLaptopDialogComponent;
  let fixture: ComponentFixture<AddLaptopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLaptopDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLaptopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
