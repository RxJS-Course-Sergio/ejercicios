import { fromEvent, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");

body.append(textInput);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
