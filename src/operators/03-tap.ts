import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log("antes", x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("después", valor),
      complete: () => console.log("Fin"),
    })
  )
  .subscribe((val) => console.log("subs", val));
