import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  constructor() {}

  tagselector() {
    // tag selector
    console.log("Tag selector");
    const tag = document.getElementsByTagName("h1");
    //loop
    for (let index = 0; index < tag.length; index++) {
      const result = document.getElementsByTagName("h1")[index];
      // console.log(result);
    }
  }

  classselector() {
    console.log("class selector");
    const cls = document.getElementsByClassName("intro");
    for (let index = 0; index < cls.length; index++) {
      const result = document.getElementsByClassName("intro")[index];
      // console.log(result);
    }
  }

  queryselector() {
    console.log("Query Secector");
    const query = document.querySelector("#name");
    // query.style.color = "red"; // dynamic styling avilable in query selector elements only
    query.classList.add("bg");
    // console.log(query);
  }

  queryselectorall() {
    console.log("query selector all");
    const result = document.querySelectorAll("h1,div");

    for (let index = 0; index < result.length; index++) {
      const data = result[index];
      data.addEventListener("click", () => {
        data.classList.toggle("data");
      });
    }

    // result.forEach(i => {
    //   const data = i;
    //   data.addEventListener("click", () => {
    //     data.classList.toggle("data");
    //   });
    // });
  }
  ngOnInit(): void {
    this.tagselector();
    this.classselector();
    this.queryselector();
    this.queryselectorall();
  }
}
