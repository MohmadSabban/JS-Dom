import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-elements",
  templateUrl: "./create-elements.component.html",
  styleUrls: ["./create-elements.component.scss"]
})
export class CreateElementsComponent implements OnInit {
  constructor() {}

  create() {
    const e1 = document.createElement("p");
    e1.innerHTML = "hi";
    e1.classList.add("data");
    console.log(e1);
  }

  text_node() {
    const e1 = document.createTextNode("Hi text node");
    console.log(e1);
  }

  fragments() {
    const frag = document.createDocumentFragment();
    console.log(frag);
  }

  ngOnInit(): void {
    this.create();
    this.text_node();
    this.fragments();
  }
}
