import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsersResponse } from "../interfaces/github-users.interface";
import { GithubUser } from "../interfaces/github-user.interface";

const showUsers = (users: GithubUser[]) => {
  console.log(users);
  orderList.innerHTML = "";

  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const anchor = document.createElement("a");

    img.src = user.avatar_url;
    anchor.href = user.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    map<string, Observable<GithubUsersResponse>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll(),
    map((item) => item["items"])
  )
  .subscribe(showUsers);
