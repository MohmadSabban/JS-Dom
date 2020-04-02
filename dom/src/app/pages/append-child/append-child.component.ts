import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-append-child",
  templateUrl: "./append-child.component.html",
  styleUrls: ["./append-child.component.scss"]
})
export class AppendChildComponent implements OnInit {
  constructor() {}

  //  Remove one tag into one place to another place (change parent)
  move_child() {
    const h1 = document.querySelector("h1");
    const sec = document.querySelector("section");
    sec.appendChild(h1);
    console.log(sec);
    h1.style.color = "red";
  }

  //  create and append tag as child
  create_append() {
    const sec = document.querySelector("section");
    const h2 = document.createElement("h2");
    sec.appendChild(h2);
    h2.innerHTML = "append H2";
    // h2.firstChild.nodeValue = "Change value using node";
  }

  // create document fragment (temp) and then append into main
  create_fragment() {
    const sec = document.querySelector("section");
    const frag = document.createDocumentFragment(); // Create Temp document
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    p.textContent = "This is P tag";
    h2.textContent = "this is H2 tag";

    // frag.appendChild(p);   // add p tag into temp document
    // frag.appendChild(h2); // add h tag into temp document

    frag.append(p, h2); //to append multiple value appned or for single value use appned child
    console.log(frag);

    sec.appendChild(frag); // Final add frag into main document and remove elements from frag
  }

  // Use of Append method
  fra() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "hi";
    div.append("Hi", p);
    console.log(div);
  }

  ngOnInit(): void {
    this.move_child();
    this.create_append();
    this.create_fragment();
    this.fra();
  }
}
