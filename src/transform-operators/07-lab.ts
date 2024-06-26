import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// Helpers

const httpRequest = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((resp) => resp["response"]),
    map((resp) => resp["token"]),
    catchError((err) => of(""))
  );

// creando un formulario

const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones

inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams

const submitForm$ = fromEvent(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: (event.target[0] as HTMLInputElement).value,
    password: (event.target[1] as HTMLInputElement).value,
  })),
  // mergeMap(httpRequest)
  // switchMap(httpRequest)
  exhaustMap(httpRequest)
);

submitForm$.subscribe((token) => console.log(token));
