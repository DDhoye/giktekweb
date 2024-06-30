import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BanksService {
  constructor(private http: HttpClient) {}

  private localBanks = [
    {
      name: 'Sidian Bank',
      image: '/assets/images/sidianbank.png',
      details: 'Sidian Bank provides commercial and personal banking services.',
    },
    {
      name: 'Eco',
      image: '/assets/images/ecobank.jpg',
      details: 'Eco Bank offers a range of financial products and services.',
    },
    {
      name: 'Stanbic',
      image: '/assets/images/stanbicbank.png',
      details: 'Stanbic Bank specializes in business and personal banking.',
    },
    {
      name: 'Equity',
      image: '/assets/images/equitybank.png',
      details: 'Equity Bank is known for its innovative banking solutions.',
    },
  ];

  getBanks(): Observable<any[]> {
    return this.http
      .get<any[]>('https://68.183.17.216:8080/api/institutions')
      .pipe(
        map((bankNamesFromBackend) => {
          bankNamesFromBackend.forEach((bank) => {
            const localBank = this.localBanks.find(
              (localBank) =>
                localBank.name.toLowerCase() === bank.name.toLowerCase()
            );
            if (localBank) {
              localStorage.setItem('institutionid', bank.id.toString());
              localStorage.setItem('bankName', bank.name);
              console.log(
                'Stored institutionid:',
                localStorage.getItem('institutionid')
              );
            }
          });

          return bankNamesFromBackend.map((bank) => {
            const localBank = this.localBanks.find(
              (localBank) =>
                localBank.name.toLowerCase() === bank.name.toLowerCase()
            );
            return {
              ...bank,
              image: localBank ? localBank.image : '/assets/images/default.png',
              details: localBank ? localBank.details : 'Details not available',
            };
          });
        })
      );
  }
}
