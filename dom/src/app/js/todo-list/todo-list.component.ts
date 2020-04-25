import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  todo() {
    const todoInput = document.querySelector("input");
    const todoButton = document.querySelector(".todo-button");
    const todoItem = document.querySelector(".todo-item");
    todoButton.addEventListener("click", () => {
      const li = document.createElement("li");
      li.classList.add("todo-list");
      const div = document.createElement("div");
      div.innerText = todoInput.value;
      li.appendChild(div);
      const buttonCheck = document.createElement("button");
      buttonCheck.classList.add("check");
      buttonCheck.innerHTML = `<i class="fa fa-check-square"></i>`;
      li.appendChild(buttonCheck);
      const buttontrash = document.createElement("button");
      buttontrash.classList.add("delete");
      buttontrash.innerHTML = ` <i class="fa fa-trash"></i>`;
      li.appendChild(buttontrash);
      todoItem.appendChild(li);
      todoInput.value = " ";
      li.addEventListener("click", (e) => {
        this.add(e);
      });
    });
  }

  add(e) {
    const target = e.target;
    const todo = target.parentElement;
    if (target.classList[0] === "delete") {
      todo.classList.add("del");
      todo.addEventListener("transitionend", () => {
        todo.remove();
      });
    } else if (target.classList[0] === "check") {
      todo.classList.toggle("complete");
    }
  }

  filter() {
    const todoItem = document.querySelector(".todo-item");
    const ce = todoItem.childNodes;
    const but = document.querySelector(".filter");
    but.addEventListener("click", () => {
      ce.forEach((todo) => {
        // @ts-ignore
        if (todo.classList.contains("complete")) {
          // @ts-ignore
          todo.style.display = "flex";
        } else {
          // @ts-ignore
          todo.style.display = "none";
        }
      });
    });
  }

  ngOnInit(): void {
    this.todo();
    // this.filter();
  }
}
