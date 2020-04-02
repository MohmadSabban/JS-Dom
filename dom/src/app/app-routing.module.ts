import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./pages/intro/intro.component";
import { SelectorComponent } from "./pages/selector/selector.component";
import { TraversalComponent } from "./pages/traversal/traversal.component";
import { CreateElementsComponent } from "./pages/create-elements/create-elements.component";
import { AppendChildComponent } from "./pages/append-child/append-child.component";

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "selector", component: SelectorComponent },
  { path: "traversal", component: TraversalComponent },
  { path: "create_elements", component: CreateElementsComponent },
  { path: "append_child", component: AppendChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
