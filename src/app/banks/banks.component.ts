import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css'],
})
export class BanksComponent implements OnInit {
  banks: any[] = [];

  constructor(private banksService: BanksService, private router: Router) {}

  ngOnInit(): void {
    this.banksService.getBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }
  bookAppointment(id: number, name: string): void {
    localStorage.setItem('institutionId', id.toString());
    localStorage.setItem('institutionName', name);
    this.router.navigate(['/appointment', name.toLowerCase()]);
  }
}
