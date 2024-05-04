import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://api.github.com/xusers?per_page=5";

const handleError = (resp: AjaxError) => {
  console.warn("error", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

// const obs1$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('ajax:', data));

obs1$.pipe(catchError(handleError)).subscribe({
  next: (data) => console.log("ajax:", data),
  error: (err) => console.warn("error", err),
  complete: () => console.log("complete"),
});
