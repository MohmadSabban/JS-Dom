import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-array",
  templateUrl: "./array.component.html",
  styleUrls: ["./array.component.scss"],
})
export class ArrayComponent implements OnInit {
  constructor() {}

  data = ["data", "java", "css", "html", "js", "css"];
  numeric = [2, 1, 21, 10, 3, 14];
  fruits: string[] = ["Apple", "data", "Orange", "Banana"];
  display() {
    // const ne = this.data;
    // console.log(ne);
    // ne.push("new value");
    // console.log(`original array${this.data}`);
    // console.log(`new array${ne}`); // Orignal also update so if you want copy array use map

    // Used of map
    const newarray = this.data.map((data) => data);
    newarray.push("new value");
    console.log(`orignal array${this.data}`);
    console.log(`New array${newarray}`);

    // Used of Find
    const search = this.data.find((data) => {
      if (data === "css") {
        return data;
      }
    });
    console.log(search);

    // Use Of Filter
    const fil = this.data.filter(
      (data) => data.includes("cs")
      // if (data === "css") {
      //   return data;
      // }
    );
    console.log(fil);

    // Sort Method
    const SortedArray = this.data.sort();
    console.log(SortedArray);

    // Sorting NUmeric array
    const qw = this.numeric.sort((a, b) => a - b);
    console.log(qw);

    // HOw to join to array
    // @ts-ignore
    const combine = this.fruits.concat(this.data.concat(this.numeric));
    console.log(combine);

    // THis is spread Operator(Es6)
    const com = [...this.data, ...this.numeric, ...this.fruits];
    console.log(com);

    // Sort String
    const str = "sabban";
    const sortstring = str.split("").sort().join("");
    console.log(sortstring);
    // Reverse String
    const reverseString = str.split("").reverse().join("");
    console.log(reverseString);
  }

  ngOnInit(): void {
    this.display();
  }
}
