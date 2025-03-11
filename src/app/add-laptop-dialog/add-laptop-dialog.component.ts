import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-add-laptop-dialog',
  standalone: true, // ✅ Ensures it works without NgModule
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    provideNativeDateAdapter(),
  ],
  templateUrl: './add-laptop-dialog.component.html',
  styleUrl: './add-laptop-dialog.component.css'
})
export class AddLaptopDialogComponent {
  laptopForm!: FormGroup;
  manufacturers = ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer', 'Microsoft'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddLaptopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.laptopForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.maxLength(50)]],
      serialNumber: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{10}$/)]],
      model: ['', Validators.required],
      manufacturer: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      warrantyExpiry: ['', Validators.required],
      condition: ['new', Validators.required]
    });
  }

  saveLaptop(): void {
    if (this.laptopForm.valid) {
      this.dialogRef.close(this.laptopForm.value);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
