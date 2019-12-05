import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http';
import { ApiService } from './api.service';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
<<<<<<< HEAD
   
=======
    ResultComponent
>>>>>>> 539693d5a78b43cc49bc559c4e4819441f1ece59
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
