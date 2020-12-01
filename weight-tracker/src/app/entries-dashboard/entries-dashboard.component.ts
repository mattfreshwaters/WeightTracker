import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-entries-dashboard',
  templateUrl: './entries-dashboard.component.html',
  styleUrls: ['./entries-dashboard.component.css']
})
export class EntriesDashboardComponent implements OnInit {

  entries: Entry[] = [];

  constructor(
    private entryService: EntryService,
    private tokenService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.getEntries();
    
  }

  getEntries(): void{
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

  add(weight: number, date: Date): void{
    let userId = this.tokenService.getUser().id;
    if(!weight || !date) {return;}
    
    this.entryService.addEntry({weight, date, userId} as Entry)
    .subscribe(entry => {
      this.entries.push(entry);
    })
  }

  delete(entry: Entry): void{
    this.entries = this.entries.filter(e => e !== entry);
    this.entryService.deleteEntry(entry).subscribe();
  }

}
