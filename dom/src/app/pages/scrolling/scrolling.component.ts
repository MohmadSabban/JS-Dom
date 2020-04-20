import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scrolling",
  templateUrl: "./scrolling.component.html",
  styleUrls: ["./scrolling.component.scss"],
})
export class ScrollingComponent implements OnInit {
  constructor() {}

  scrolling() {
    const section = document.querySelector("section");
    const divheight = document.querySelector("div");

    const height = divheight.clientHeight;
    const button = document.querySelectorAll(".front");
    const button1 = document.querySelectorAll(".back");
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");

    button.forEach((el) => {
      el.addEventListener("click", (e) => {
        window.scrollBy({ top: height, left: 0, behavior: "smooth" });
      });
    });
    button1.forEach((el) => {
      el.addEventListener("click", (e) => {
        window.scrollBy({ top: -height, left: 0, behavior: "smooth" });
      });
    });
    top.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
    bottom.addEventListener("click", () => {
      const section = document.querySelector("section");
      const divheight = document.querySelector("div");
      window.scrollTo({
        top: section.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  ngOnInit(): void {
    this.scrolling();
  }
}
