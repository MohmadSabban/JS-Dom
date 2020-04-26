import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./pages/intro/intro.component";
import { SelectorComponent } from "./pages/selector/selector.component";
import { TraversalComponent } from "./pages/traversal/traversal.component";
import { CreateElementsComponent } from "./pages/create-elements/create-elements.component";
import { AppendChildComponent } from "./pages/append-child/append-child.component";
import { InsertComponent } from "./pages/insert/insert.component";
import { MoveElementsComponent } from "./pages/move-elements/move-elements.component";
import { ScrollingComponent } from "./pages/scrolling/scrolling.component";
import { SliceComponent } from "./pages/slice/slice.component";
import { IntroductionComponent } from "./js/introduction/introduction.component";
import { TodoListComponent } from "./js/todo-list/todo-list.component";
import { ArrayComponent } from "./js/array/array.component";
import { BeatMakerComponent } from "./js/beat-maker/beat-maker.component";

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "selector", component: SelectorComponent },
  { path: "traversal", component: TraversalComponent },
  { path: "create_elements", component: CreateElementsComponent },
  { path: "append_child", component: AppendChildComponent },
  { path: "insert", component: InsertComponent },
  { path: "remove", component: MoveElementsComponent },
  { path: "scrolling", component: ScrollingComponent },
  { path: "slice", component: SliceComponent },
  { path: "intro", component: IntroductionComponent },
  { path: "todo", component: TodoListComponent },
  { path: "array", component: ArrayComponent },
  { path: "beat", component: BeatMakerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
