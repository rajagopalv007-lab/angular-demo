import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface House {
  id: number;
  title: string;
  price: number;
  image: string;  
  isAvailable: boolean;
}

@Component({
  selector: 'app-property-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
   templateUrl: `./search.component.html`, 
  styleUrl: './property-search.component.css'
})
export class PropertySearchComponent {
 searchQuery:string = 'Modern Villa';
 price: number = 450000;
 isSold: boolean = false;
 thumbnail: string = 'https://tinyurl.com/modern-home-demo';
 buyHome() {
  this.isSold = true;
  alert('Congratulations! You bought ' + this.searchQuery);
 }

 houses: House[] = [
  { id: 1, title: 'Modern Villa', price: 500000, image: 'https://tinyurl.com/house1-demo', isAvailable: true },
  { id: 2, title: 'Beach House', price: 750000, image: 'https://tinyurl.com/house2-demo', isAvailable: false },
  { id: 3, title: 'Mountain Cabin', price: 300000, image: 'https://tinyurl.com/house3-demo', isAvailable: true },
  { id: 4, title: 'City Loft', price: 450000, image: 'https://tinyurl.com/house4-demo', isAvailable: true }
];


}
