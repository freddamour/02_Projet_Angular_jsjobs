import { JobService } from './../services/job.service';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  resultat;
  jobs;
  error = '';

  constructor(private jobService: JobService ) { }

  ngOnInit() {
       // this.resultat = this.http.get('assets/jobs.json')
      /*  this.resultat = this.http.get('data/jobs.json').pipe(
         map(res => console.log(res))
       )
       .subscribe((response) => {
         this.tb = response;
         console.log(this.tb);
        }); */

        this.jobService.getJobs().subscribe(
        data => this.jobs = data,
        error => {console.error(error); this.error = error;
        }
      );
  }



}
