import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent {

  formData: any = {};

  constructor(private api: ApiService) {}

  submit() {
    this.api.submitApplication(this.formData).subscribe(() => {
      alert("Application Submitted Successfully!");
      this.formData = {};
    });
  }
}
