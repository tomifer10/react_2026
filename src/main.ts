import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1> Hola Mundo </h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
