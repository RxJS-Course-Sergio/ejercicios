import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000));
//.subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    debounceTime(3000),
    map((event) => (event.target as HTMLInputElement).value),
    distinctUntilChanged()
  )
  .subscribe(console.log);
