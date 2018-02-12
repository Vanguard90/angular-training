import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'red';

  constructor() { }

  ngOnInit() {

  }

}
