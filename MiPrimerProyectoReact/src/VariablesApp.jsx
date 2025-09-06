import "./VariablesApp.css";

export const VariablesApp = () => {
  const active = true;

  const style = {
    color: active ? "red" : "blue",
    fontSize: "20px"
  }

  return (
    <>
      <h1 className={active ? 'active' : 'inactive'}>
        Esta clase es de estilos
      </h1>
      <h1 style={style}></h1>
    </>
  );
};
