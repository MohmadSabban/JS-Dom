import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-traversal",
  templateUrl: "./traversal.component.html",
  styleUrls: ["./traversal.component.scss"]
})
export class TraversalComponent implements OnInit {
  constructor() {}

  parent() {
    console.log("Parent");
    const parent = document.querySelector("p").parentElement;
    const parentElement = document.querySelector("p").parentElement;
    console.log("this is parnet node property" + parent);
    console.log("parnet element property" + parentElement);
    console.log("  ");
  }

  firstchild() {
    console.log("FirstChild");
    const child = document.querySelector("h1").firstChild;
    const childelement = document.querySelector("h1").firstElementChild;
    console.log(child); // retuen text node
    console.log(childelement); // return null beacuse it not count text node
    console.log("  ");
  }

  children() {
    console.log("Children");
    const childnotes = document.querySelector("h1").childNodes;
    console.log(childnotes); // return array of all child  include text node
    const children = document.querySelector("h1").children;
    console.log(children); // return array of all child which in elements node this ignore text node
    console.log("  ");
  }

  lastchild() {
    const last1 = document.querySelector("p").lastChild;
    console.log(last1); // include text node
    const lastelements1 = document.querySelector("p").lastElementChild;
    console.log(lastelements1); // igonre text node
    console.log("  ");
  }

  previous_sibling() {
    console.log("Previous Sibling");
    const prev = document.querySelector("i").previousSibling;
    console.log(prev);
    const prevelements = document.querySelector("i").previousElementSibling;
    console.log(prevelements);
    console.log("  ");
  }

  next_sibling() {
    console.log("Next Sibling");
    const next = document.querySelector("h1").nextSibling;
    console.log(next);
    const nextelements = document.querySelector("h1").nextElementSibling;
    console.log(nextelements);
    console.log("  ");
  }

  ngOnInit(): void {
    this.parent();
    this.firstchild();
    this.children();
    this.lastchild();
    this.previous_sibling();
    this.next_sibling();
  }
}
