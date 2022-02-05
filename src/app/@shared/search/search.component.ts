import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(200)).subscribe((res) => {
      this.onDebounce.emit(res);
    });
  }

  searchMain() {
    this.OnEnter.emit(this.searchTerm);
  }

  teclaPrecionada() {
    this.debouncer.next(this.searchTerm);
  }
}
