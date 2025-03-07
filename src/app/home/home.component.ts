import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

export interface LaptopDetails {
  employee_name: string;
  purchased_date: string;
  laptop_age: number;
  serial_number: string;
  description: string;
  location: string;
  condition: string;
}

const ELEMENT_DATA: LaptopDetails[] = [
  {
    employee_name: "John Doe",
    purchased_date: "2022-05-15",
    laptop_age: 2,
    serial_number: "SN12345678",
    description: "Dell Latitude 5420, Intel i7, 16GB RAM, 512GB SSD",
    location: "Head Office",
    condition: "Good"
  },
  {
    employee_name: "Jane Smith",
    purchased_date: "2021-08-10",
    laptop_age: 3,
    serial_number: "SN98765432",
    description: "HP EliteBook 840, AMD Ryzen 5, 8GB RAM, 256GB SSD",
    location: "Branch A",
    condition: "Fair"
  },
  {
    employee_name: "Michael Johnson",
    purchased_date: "2020-12-20",
    laptop_age: 4,
    serial_number: "SN56473829",
    description: "MacBook Pro 13-inch, M1 Chip, 16GB RAM, 1TB SSD",
    location: "Remote",
    condition: "Excellent"
  },
  {
    employee_name: "Emily Davis",
    purchased_date: "2023-03-05",
    laptop_age: 1,
    serial_number: "SN10293847",
    description: "Lenovo ThinkPad X1 Carbon, Intel i5, 8GB RAM, 512GB SSD",
    location: "Branch B",
    condition: "New"
  },
  {
    employee_name: "Robert Wilson",
    purchased_date: "2019-07-22",
    laptop_age: 5,
    serial_number: "SN47583920",
    description: "Acer Aspire 5, Intel i3, 4GB RAM, 128GB SSD",
    location: "Head Office",
    condition: "Needs Repair"
  },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,  // ✅ Import Material Card
    MatIconModule   // ✅ Import Material Icons
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dashboardCards = [
    { title: 'Number of Laptops', count: 99, color: '#333333' },  // Orange
    { title: 'Number of Laptops', count: 7, color: '#333333' }, // Blue
    { title: 'Number of Laptops', count: 7, color: '#333333' },  // Green
    { title: 'Number of Laptops', count: 7, color: '#333333' } // Purple
  ];

  displayedColumns: string[] = ['employee_name', 'purchased_date', 'laptop_age', 'serial_number', 'description', 'location', 'condition'];
  dataSource = ELEMENT_DATA;
}

//employee name, purchased date, laptop age, serial number, description, location, and condition
