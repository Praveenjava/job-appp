import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html'
})
export class JobTableComponent implements OnInit {

  applications: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getApplications().subscribe((data: any) => {
      this.applications = data;
    });
  }
}
