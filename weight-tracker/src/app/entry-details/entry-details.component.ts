import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {

  entry: Entry;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: EntryService
  ) { }

  ngOnInit(): void {
    this.getEntry();
  }

  getEntry(): void{
    const goalId = +this.route.snapshot.paramMap.get('id');
    this.service.getEntry(goalId).subscribe(entry => this.entry = entry);
  }

  goBack(): void {
    this.location.back();
  }

}
