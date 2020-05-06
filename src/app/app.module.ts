import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListResultComponent } from './list-result/list-result.component';
import { SingleResultComponent } from './single-result/single-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ListResultComponent,
    SingleResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
