import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.scss"]
})
export class InsertComponent implements OnInit {
  constructor() {}

  insert() {
    const ul = document.querySelector("ul");
    // const li = document.querySelector(".angular");
    // const li = document.querySelector("ul").lastElementChild.previousSibling;
    const li = document.querySelector("li");
    const newli = document.createElement("li");
    newli.textContent = "vue js";
    const ins = ul.insertBefore(newli, li);
    ins.classList.add("list");
  }

  insertadjecent() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li");
    const data = li.innerHTML; // to get data form tag
    const newli = document.createElement("span");
    newli.textContent = "vue js";
    const ins = li.insertAdjacentElement("beforeend", newli);
    // const ins = li.insertAdjacentElement("beforebegin", newli);
    // const ins = li.insertAdjacentElement("afterend", newli);
    // const ins = li.insertAdjacentElement("afterbegin", newli);
    console.log(ul);
    console.log(data);
  }

  ngOnInit(): void {
    // this.insert();
    this.insertadjecent();
  }
}
