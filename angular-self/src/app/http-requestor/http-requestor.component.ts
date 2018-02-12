import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-requestor',
  templateUrl: './http-requestor.component.html',
  styleUrls: ['./http-requestor.component.scss']
})
export class HttpRequestorComponent implements OnInit {
data: Object;
loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
