import { catchError, map, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://api.github.com/Xusers?per_page=5";

const handleErrors = (response: Response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

const handleError = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then(handleErrors)
//   .then((resp) => resp.json())
//   .then((data) => console.log("data:", data))
//   .catch((err) => console.warn("error en usuarios", err));

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(handleError)
  )
  .subscribe((users) => console.log("usuarios:", users));
