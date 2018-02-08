import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" placeholder="search" autofocus`,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, 
              private el: ElementRef) {

   }

  ngOnInit(): void {
    // convert the keyup event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value) // extract the value of the input
    .filter((text: string) => text.length > 1) // Filter out if empty
    .debounceTime(250) // only once every 250ms
    .do(() => this.loading.emit(true)) // enable loading
    // search, discarding old events if new one comes by
    .map((query: string) => this.youtube.search(query))
    .switch()
    // act on the return of the search
    .subscribe(
      (results: SearchREsult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }
}
