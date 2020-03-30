import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./pages/intro/intro.component";
import { SelectorComponent } from "./pages/selector/selector.component";

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "selector", component: SelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
