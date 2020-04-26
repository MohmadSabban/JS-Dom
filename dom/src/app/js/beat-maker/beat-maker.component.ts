import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-beat-maker",
  templateUrl: "./beat-maker.component.html",
  styleUrls: ["./beat-maker.component.scss"],
})
export class BeatMakerComponent implements OnInit {
  index = 0;
  play = false;
  inter;
  constructor() {}

  re() {
    const button = document.querySelector(".play");
    const beat = document.querySelector(".beat");
    const box = document.querySelectorAll(".pads");
    box.forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.toggle("active");
      });
    });
    button.addEventListener("click", () => {
      if (!this.play) {
        this.play = true;
        this.start();
        // @ts-ignore
      } else {
        this.play = false;
        this.stop();
        // @ts-ignore
        beat.pause();
      }
    });
  }

  start() {
    this.inter = setInterval(() => {
      this.pad();
    }, 100);
  }

  stop() {
    clearInterval(this.inter);
  }

  pad() {
    let time = this.index % 9;
    const pads = document.querySelector(`.pd${time}`);
    if (pads.classList.contains("active")) {
      const beat = document.querySelector(".beat");
      // @ts-ignore
      beat.currentTime = 0;
      // @ts-ignore
      beat.play();
    }
    // @ts-ignore
    pads.style.animation = `playtrack 0.3s alternate ease-in-out 2`;
    this.index++;
    pads.addEventListener("animationend", () => {
      // @ts-ignore
      pads.style.animation = "";
    });
  }

  ngOnInit(): void {
    this.re();
  }
}
