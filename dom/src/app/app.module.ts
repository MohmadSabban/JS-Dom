import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SelectorComponent } from './pages/selector/selector.component';
import { TraversalComponent } from './pages/traversal/traversal.component';
import { CreateElementsComponent } from './pages/create-elements/create-elements.component';
import { AppendChildComponent } from './pages/append-child/append-child.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SelectorComponent,
    TraversalComponent,
    CreateElementsComponent,
    AppendChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
