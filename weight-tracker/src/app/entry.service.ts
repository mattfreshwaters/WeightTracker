import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private messageService: MessageService) { }

  getEntries(): Observable<Entry[]> {
    this.messageService.add('WeightTracker: fetched entries');
    return of(ENTRIES);
  }
}
