import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure it's a standalone component
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fix the typo (styleUrl -> styleUrls)
})
export class AppComponent {
  title = 'laptop-inventory-angular';
}
