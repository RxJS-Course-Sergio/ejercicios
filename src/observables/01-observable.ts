import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("[next]: ", valor),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("complete"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  //   const a = undefined;
  //   a.nombre = "Sergio";

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.info("Completado")
// );
