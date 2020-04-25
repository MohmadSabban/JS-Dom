import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slice",
  templateUrl: "./slice.component.html",
  styleUrls: ["./slice.component.scss"],
})
export class SliceComponent implements OnInit {
  data = [
    { name: "sabban", age: 18, gender: "male" },
    { name: "rahul", age: 18, gender: "male" },
    { name: "jd", age: 18, gender: "male" },
    { name: "dj", age: 18, gender: "male" },
    { name: "Thapiyal", age: 18, gender: "male" },
    { name: "dosad", age: 18, gender: "male" },
    { name: "sunil", age: 18, gender: "male" },
    { name: "Rajat", age: 18, gender: "male" },
    { name: "Rishab", age: 18, gender: "male" },
    { name: "naveen", age: 18, gender: "male" },
    { name: "Preety", age: 18, gender: "female" },
    { name: "anjali", age: 18, gender: "female" },
    { name: "tanya", age: 18, gender: "female" },
    { name: "Deepanshu", age: 18, gender: "male" },
    { name: "Ashu", age: 18, gender: "male" },
    { name: "Mukul", age: 18, gender: "male" },
    { name: "", age: 18, gender: "male" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
