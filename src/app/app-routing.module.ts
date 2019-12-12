import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { ResultComponent } from "./result/result.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "landing", component: LandingPageComponent },
  { path: "search", component: SearchComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "result", component: ResultComponent },
  { path: "**", redirectTo: "/search" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
