import "./VariablesApp.css";

export const VariablesApp = () => {

    const style ={
        color: 'red',
        fontSize: '20px'
    }

  return (
    <>
      <h1>Esta clase es de estilos</h1>
      <h2 id="subtitulo">Vamos a utilizar distintos selectores</h2>
      <h4 className="red">Este es un titulo rojo</h4>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat et
          minus inventore in, reiciendis dicta delectus! Voluptatum maiores
          magni minus perspiciatis? Debitis, est voluptatem. Vitae quo eligendi
          id laudantium minima.
        </p>
      </div>
      <p style={style}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sunt
        ad quo cumque doloribus aliquid quos dolores inventore ratione fugit
        deserunt impedit, reiciendis omnis distinctio fuga at aut similique!
        Non.
      </p>
    </>
  );
};
