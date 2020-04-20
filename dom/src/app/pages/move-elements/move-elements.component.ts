import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-move-elements",
  templateUrl: "./move-elements.component.html",
  styleUrls: ["./move-elements.component.scss"],
})
export class MoveElementsComponent implements OnInit {
  constructor() {}
  index = 0;
  remove() {
    const div = document.querySelector("div");
    const hx = document.querySelector(".h");
    const del = div.removeChild(hx);
    console.log(del);
  }

  replace() {
    const div = document.querySelector("div");
    const p = document.createElement("p");
    p.textContent = "hu this is paragraph";
    const oldp = document.querySelector("p");
    div.replaceChild(p, oldp);
  }

  getvalue() {
    this.index++;
    const div = document.querySelector("div");
    const input = document.querySelector("input");
    if (input.value == "") {
      console.log("null");
    } else {
      const text = input.value;
      const li = document.createElement("li");
      li.textContent = text;
      const id = `sabban${this.index}`;
      li.setAttribute("id", id);
      div.appendChild(li);
      li.addEventListener("click", (e) => {
        console.log(e.target);
      });
    }
  }

  removeattr() {
    const h = document.querySelector(".h");
    h.removeAttribute("class");
    console.log(h.attributes);
  }

  tar() {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li");
    const body = document.querySelector("body");
    li.forEach((element) => {
      element.addEventListener("click", (event) => {
        console.log(event.target);
      });
    });
  }

  ngOnInit(): void {
    this.removeattr();
    this.tar();
  }
}
