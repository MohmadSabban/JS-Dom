import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"]
})
export class SelectorComponent implements OnInit {
  constructor() {}

  node() {
    const result = (document.querySelector("h1").firstChild.nodeValue =
      "new value using node value ");
    const result1 = document.querySelector("h1").firstChild.nodeType;
    const result2 = document.querySelector("h1").firstChild.nodeName;
    console.log(result + result1 + result2);
  }

  attr() {
    const result = document.querySelector("h1");
    const name = result.attributes[1];
    console.log(name.name);
    console.log(name.value);
  }

  innner() {
    // const result = document.querySelector("h1").innerHTML; // only for taking value
    const result = document.querySelector("h1"); // set new value
    result.innerHTML = "inner html set new value";
  }
  ngOnInit(): void {
    this.node();
    // this.innner();
    this.attr();
  }
}
