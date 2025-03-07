import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-laptop-dialog',
  standalone: true, // ✅ Ensures it works without NgModule
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-laptop-dialog.component.html',
  styleUrl: './add-laptop-dialog.component.css'
})
export class AddLaptopDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddLaptopDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveLaptop(): void {
    // Logic to save the laptop details
    console.log('Laptop added successfully!');
    this.dialogRef.close();  // Close the dialog after saving
  }
}
