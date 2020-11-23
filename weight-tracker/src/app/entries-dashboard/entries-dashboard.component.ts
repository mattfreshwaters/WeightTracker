import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries-dashboard',
  templateUrl: './entries-dashboard.component.html',
  styleUrls: ['./entries-dashboard.component.css']
})
export class EntriesDashboardComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void{
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

}
