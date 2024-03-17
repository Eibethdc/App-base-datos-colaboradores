import { useState } from "react"

const Buscador = ({listadoColaboradores, setListadoColaboradores}) =>{
    const [busqueda, setBusqueda] = useState('')

    const filtrar = listadoColaboradores.filter(
        (colaborador) => {
            return(
                colaborador.nombre.toUpperCase().includes(busqueda.toUpperCase) ||
                colaborador.correo.includes(busqueda) ||
                colaborador.edad.includes(busqueda) ||
                colaborador.cargo.toUpperCase().includes(busqueda.toUpperCase()) ||
                colaborador.telefono.includes(busqueda)
            )
        })

    const handleBuscar = (e) =>{
        setBusqueda(e.target.value)
        setListadoColaboradores(filtrar)
    }
    return(
        <div className="mb-4">
            <input
            className="w-25 rounded border"
            placeholder="Busca un colaborador"
            onChange={handleBuscar}
            value={busqueda}
            />
        </div>
    )
}

export default Buscador