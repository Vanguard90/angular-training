import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';
import { HttpRequestorComponent } from './http-requestor/http-requestor.component';


@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    ButtonHolderComponent,
    HttpRequestorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
