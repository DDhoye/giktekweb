import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  banks = [
    { name: ' Sidian', logo: '/images/Logo-Banner-03.png' },
    { name: 'Stanbic', logo: '/images/Logo-Banner-04.png' },
    { name: 'Eco', logo: '/images/Logo-Banner-05.png' },
    { name: 'Equity', logo: '/images/Logo-Banner-03.png' },
  ];
}
