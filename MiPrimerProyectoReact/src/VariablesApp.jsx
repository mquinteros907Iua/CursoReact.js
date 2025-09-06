const string = "Curso de React"; //Se ve tal cual el string sin comillas
const string2 = "Digital House"; //Se ve tal cual el string sin comillas
const string3 = `Estes es un ${string} que estás cursando en ${string2}`; //Se ve una cadena de texto
const num = 1.5; //Se ve como un número común y corriente
const array = ["Html", "Css", "Javascript", "React"]; //Se como texto todo junto, pero está separado en el HTML
const boolean = false; //No se ve para nada ni aparece en el HTML
const foo = () => "Este es un string devuelvo por una función"; //sino la ejecuto rompe la app, debo ejecutarla
const object = { name: "Marcos", job: "Programador" }; //Esto no funciona y rompe la app
const set = new Set([1, 2, 3, 4]); //Es una excepcion ya que aunque sea un objeto, lo mismo muestra el derivado ya sea string o array
const date = new Date(); //Esto no funciona y rompe la app

export const VariablesApp = () => {
  return (
    <>
      <h1>{string}</h1>
      <h4>{string2}</h4>
      <h6>{string3}</h6>
      <p>{num}</p>
      <p>{array}</p>
      <p>{boolean}</p>
      <p>{foo()}</p>
      <p>{JSON.stringify(object)}</p>
      <p>{JSON.stringify(date)}</p>
    </>
  );
};
