import { CounterApp } from "./components/CounterApp"
import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
    return (
        <>
            <h1>Aplicación de Hooks</h1>
            <hr />
            <h1>Contador</h1>
            <hr />
            <CounterApp />
            <hr />
            <h1>Formulario</h1>
            <FormsApp />
            <hr />
            <h1>Fetch</h1>
            <FetchApp />

        </>
    )
}