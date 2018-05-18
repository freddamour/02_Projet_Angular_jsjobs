import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  resultat;
  tb;

  constructor(private http: HttpClient) { }

  ngOnInit() {
       //this.resultat = this.http.get('assets/jobs.json')
       this.resultat = this.http.get('assets/jobs.json')
       .subscribe((response) => {
         this.tb = response;
         console.log(this.tb);
        });
  }



}
