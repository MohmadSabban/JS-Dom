import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {
  constructor() {}

  data() {
    const person = { name: "sabban", age: 18, gender: "Male" };
    console.log("Initial Array :- " + person.name, person.age);
    delete person.age;
    console.log("After delete age :- " + person.name, person.age);
    person.age = 21;
    console.log("Adding new value  :- " + person.name, person.age);
  }

  ngOnInit(): void {
    this.data();
  }
}
