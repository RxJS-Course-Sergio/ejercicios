import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("[next]: ", valor),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("complete"),
};

const interval$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Destruido");
  };
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe((rnd) => console.log("subs1: ", rnd));
// const subs2 = interval$.subscribe((rnd) => console.log("subs2: ", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);