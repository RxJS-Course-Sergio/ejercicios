import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("[next]: ", valor),
  error: (error) => console.warn("[error]: ", error),
  complete: () => console.info("complete"),
};
const interval$ = new Observable<number>((subscriber) => {
  let contador = 1;

  const interval = setInterval(() => {
    subscriber.next(contador++);
    console.log("Observer");
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Destroy");
  };
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  //   subscription2.unsubscribe();
  //   subscription3.unsubscribe();
  console.log("Timeout");
}, 6000);
