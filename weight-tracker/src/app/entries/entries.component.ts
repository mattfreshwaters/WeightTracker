import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { ENTRIES } from '../mock-entries';
import { EntryService } from '../entry.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;

  constructor(private entryService: EntryService, private messageService: MessageService) { }

  getEntries(): void{
    this.entryService.getEntries().subscribe(entries => this.entries =entries);
  }

  ngOnInit(): void {
    this.getEntries();
  }

 
onSelect(entry: Entry): void {
  this.selectedEntry = entry;
  this.messageService.add(`Entries Component: Selected entryid=${entry.entryId} for userid=${entry.userId}`)

}

}
