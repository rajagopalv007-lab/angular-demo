import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import Card
import { MatButtonModule } from '@angular/material/button'; // Import Button
@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.scss'
})
export class MaterialDemoComponent {

}
