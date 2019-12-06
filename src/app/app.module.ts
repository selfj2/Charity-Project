import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import { SearchService } from "./search.service";
import { SearchComponent } from "./search/search.component";
import { AppRoutingModule } from "./app-routing.module";
import { ResultComponent } from "./result/result.component";
import { CharityItemComponent } from "./charity-item/charity-item.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    CharityItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [ApiService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
