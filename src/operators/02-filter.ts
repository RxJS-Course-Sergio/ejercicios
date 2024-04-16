import { Observable, filter, range, map, from, fromEvent } from "rxjs";

range(20, 30)
  .pipe(
    filter((val, i) => {
      return val % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

console.log("Filter con heroes");

from(personajes)
  .pipe(filter((personaje) => personaje.tipo === "heroe"))
  .subscribe(console.log);

console.log("Filter con villanos");

from(personajes)
  .pipe(filter((personaje) => personaje.tipo !== "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);