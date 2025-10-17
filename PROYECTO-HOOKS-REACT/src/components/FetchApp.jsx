import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  //const url = "https://jsonplaceholder.typicode.com/users/1"; //Url para PUT y DELETE

  const { data, isLoading, error, fetchData } = useFetch();

  /*const body = {
    title: "foo",
    body: "bar",
    userId: 1,
  };*/

  useEffect(() => {

    fetchData(url, 'GET');
    //fetchData(url, 'POST', body)
    //fetchData(url, "PUT", body);
    //fetchData(url, "DELETE");
  }, [fetchData]);

  return (
    <>
      <h2>Lista de Usuarios: </h2>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Ha ocurrido un error: {error}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
