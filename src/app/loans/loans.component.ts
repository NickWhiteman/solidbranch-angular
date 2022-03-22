import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/api/api.service';
import { Data, ResponseQuery } from 'src/type/type';

@Component({
  selector: 'app-loans',
  template: `
    <table class="table">
      <thead>
          <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
          </tr>
      </thead>
      <tbody *ngIf="tables">
          <tr *ngFor="let row of tables" class="row">
              <td>{{ row.name.first }} {{ row.name.last }}</td>
              <td>{{ row.amount }}</td>
          </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['../style.css']
})
export class LoansComponent implements OnInit {

  tables: Data[] | undefined;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getData()
      .subscribe((data: ResponseQuery) => {
        this.tables = data.data.filter(
          row => row.type === 'loan'
        );
      });
  }

}
