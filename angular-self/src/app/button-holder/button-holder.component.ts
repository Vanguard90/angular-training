import { Component, OnInit } from '@angular/core';
import { DisplayText } from '../app.model';

@Component({
  selector: 'app-button-holder',
  templateUrl: './button-holder.component.html',
  styleUrls: ['./button-holder.component.scss']
})
export class ButtonHolderComponent implements OnInit {
texts: DisplayText[]; // texts is an Array of DisplayText objects.

  constructor() {
    this.texts = [
      new DisplayText('ABC', 'DEF'),
      new DisplayText('test2', 'test2end')
    ];
   }

  ngOnInit() {
  }

  toggleEvent(): void {
    console.log(this.texts);
  }

}
