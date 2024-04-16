import { fromEvent, map } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
Consequat aliqua fugiat aliquip ad occaecat eu laborum cillum commodo in aliquip veniam. Consequat aliqua proident duis amet eu esse nostrud laborum laboris laboris cillum eu. Deserunt labore duis et consequat exercitation sit. Labore culpa deserunt ea adipisicing anim veniam voluptate culpa.
<br><br>
Voluptate ex officia officia laboris. Enim consequat eu ea dolore ex deserunt voluptate sint cupidatat sit irure. Elit dolore dolore in sit dolor ex ad cupidatat. Velit sint amet excepteur elit sit pariatur id reprehenderit id commodo sunt duis. Laboris sunt non laborum ullamco ut minim nisi commodo elit sint pariatur tempor exercitation. Quis ut consectetur velit laboris nostrud nulla mollit id cillum ex commodo proident.
<br><br>
Proident aliquip anim ea voluptate. Eiusmod excepteur voluptate dolor non ex qui eiusmod. Nostrud aute veniam sit ad id aliquip occaecat consectetur tempor irure. Labore aute sint ullamco consectetur exercitation magna esse Lorem duis aute ad excepteur consectetur. Cupidatat in aliqua et ad et aute irure officia.
<br><br>
Ut sint magna incididunt sit do deserunt officia. Laborum nisi nostrud anim laborum excepteur nisi irure culpa laborum et esse sint pariatur officia. Id deserunt minim pariatur excepteur minim velit velit duis tempor anim ad consequat. Eu irure duis sunt consectetur est elit sunt nostrud esse sunt ea. Fugiat sint aliquip amet laboris cupidatat veniam ex duis consectetur ullamco aute officia laboris.
<br><br>
Sint deserunt deserunt anim sint et dolore cillum et qui ullamco ut eiusmod quis amet. Excepteur labore nulla nulla eiusmod. Minim laborum incididunt consectetur non quis esse Lorem officia ex proident aute adipisicing sit ipsum. Aliquip commodo id id culpa officia aliquip esse enim eu veniam proident laborum.
<br><br>
Consequat mollit enim nisi sit eiusmod quis et in laboris. Fugiat laboris nulla ipsum quis ut aliqua aliqua dolore. In laborum adipisicing irure dolor.
<br><br>
Sint culpa id aute dolor velit consequat ex officia. Consequat elit duis aliqua incididunt nisi proident eiusmod nostrud officia nostrud amet occaecat qui. Cillum magna aliqua et ipsum consectetur sint eiusmod cupidatat qui in labore proident proident anim. Velit labore occaecat nisi ullamco non reprehenderit incididunt. Nulla aute veniam officia minim cillum do exercitation minim nostrud labore non qui. Cupidatat consequat minim voluptate esse do commodo commodo.
<br><br>
Consectetur ea consectetur ipsum velit occaecat sunt nulla incididunt qui culpa incididunt. Ipsum anim duis excepteur eiusmod aliqua nostrud laboris reprehenderit. Dolor commodo nulla qui est qui laboris proident sit eiusmod ullamco amet laboris commodo proident. Anim Lorem esse Lorem culpa magna elit est.
<br><br>
Qui elit labore aliqua cupidatat laboris nulla dolor tempor labore. Magna exercitation voluptate voluptate proident quis amet laboris in occaecat excepteur ipsum non voluptate sit. Aute laboris eiusmod eu dolore esse cupidatat sint fugiat deserunt. Incididunt consectetur minim qui est excepteur proident.
<br><br>
Culpa dolore sunt excepteur et nostrud deserunt ad id laboris id consequat. Non nisi eu dolore dolore. Velit nostrud sit excepteur tempor aliquip ut ea sunt sint mollit sint do officia ullamco. Sit esse in laboris ea cupidatat. Laboris sint excepteur ea cupidatat fugiat sint deserunt ut eu elit sit ut qui officia.
<br><br>
Consequat aliqua fugiat aliquip ad occaecat eu laborum cillum commodo in aliquip veniam. Consequat aliqua proident duis amet eu esse nostrud laborum laboris laboris cillum eu. Deserunt labore duis et consequat exercitation sit. Labore culpa deserunt ea adipisicing anim veniam voluptate culpa.
<br><br>
Voluptate ex officia officia laboris. Enim consequat eu ea dolore ex deserunt voluptate sint cupidatat sit irure. Elit dolore dolore in sit dolor ex ad cupidatat. Velit sint amet excepteur elit sit pariatur id reprehenderit id commodo sunt duis. Laboris sunt non laborum ullamco ut minim nisi commodo elit sint pariatur tempor exercitation. Quis ut consectetur velit laboris nostrud nulla mollit id cillum ex commodo proident.
<br><br>
Proident aliquip anim ea voluptate. Eiusmod excepteur voluptate dolor non ex qui eiusmod. Nostrud aute veniam sit ad id aliquip occaecat consectetur tempor irure. Labore aute sint ullamco consectetur exercitation magna esse Lorem duis aute ad excepteur consectetur. Cupidatat in aliqua et ad et aute irure officia.
<br><br>
Ut sint magna incididunt sit do deserunt officia. Laborum nisi nostrud anim laborum excepteur nisi irure culpa laborum et esse sint pariatur officia. Id deserunt minim pariatur excepteur minim velit velit duis tempor anim ad consequat. Eu irure duis sunt consectetur est elit sunt nostrud esse sunt ea. Fugiat sint aliquip amet laboris cupidatat veniam ex duis consectetur ullamco aute officia laboris.
<br><br>
Sint deserunt deserunt anim sint et dolore cillum et qui ullamco ut eiusmod quis amet. Excepteur labore nulla nulla eiusmod. Minim laborum incididunt consectetur non quis esse Lorem officia ex proident aute adipisicing sit ipsum. Aliquip commodo id id culpa officia aliquip esse enim eu veniam proident laborum.
<br><br>
Consequat mollit enim nisi sit eiusmod quis et in laboris. Fugiat laboris nulla ipsum quis ut aliqua aliqua dolore. In laborum adipisicing irure dolor.
<br><br>
Sint culpa id aute dolor velit consequat ex officia. Consequat elit duis aliqua incididunt nisi proident eiusmod nostrud officia nostrud amet occaecat qui. Cillum magna aliqua et ipsum consectetur sint eiusmod cupidatat qui in labore proident proident anim. Velit labore occaecat nisi ullamco non reprehenderit incididunt. Nulla aute veniam officia minim cillum do exercitation minim nostrud labore non qui. Cupidatat consequat minim voluptate esse do commodo commodo.
<br><br>
Consectetur ea consectetur ipsum velit occaecat sunt nulla incididunt qui culpa incididunt. Ipsum anim duis excepteur eiusmod aliqua nostrud laboris reprehenderit. Dolor commodo nulla qui est qui laboris proident sit eiusmod ullamco amet laboris commodo proident. Anim Lorem esse Lorem culpa magna elit est.
<br><br>
Qui elit labore aliqua cupidatat laboris nulla dolor tempor labore. Magna exercitation voluptate voluptate proident quis amet laboris in occaecat excepteur ipsum non voluptate sit. Aute laboris eiusmod eu dolore esse cupidatat sint fugiat deserunt. Incididunt consectetur minim qui est excepteur proident.
<br><br>
Culpa dolore sunt excepteur et nostrud deserunt ad id laboris id consequat. Non nisi eu dolore dolore. Velit nostrud sit excepteur tempor aliquip ut ea sunt sint mollit sint do officia ullamco. Sit esse in laboris ea cupidatat. Laboris sint excepteur ea cupidatat fugiat sint deserunt ut eu elit sit ut qui officia.

`;

const body = document.querySelector("body");

body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// Función
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams

const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(map((event) => calcularPorcentajeScroll(event)));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
