import { of, interval, take, delay, forkJoin } from "rxjs";

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin(numbers$, interval$, letters$).subscribe(console.log);
forkJoin({ num: numbers$, int: interval$, let: letters$ }).subscribe((resp) => {
  console.log(resp);
});
