import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Formulario = ({listadoColaboradores, setListadoColaboradores, setAlert}) =>{
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono] = useState('')

    const enviarFormulario = (e) =>{
        e.preventDefault()
        if(nombre === '' || email === '' || edad === '' || cargo === '' || telefono === ''){
            setAlert({
                text: 'Todos los campos son obligatorios',
                color: 'danger'
            })
            return
        }else{
            setListadoColaboradores([...listadoColaboradores, {nombre: nombre, correo: email, edad: edad, cargo: cargo, telefono: telefono}])
            setAlert({
                text: 'Colaborador agregado',
                color: 'success'
            })
        }
        setNombre('')
        setEmail('')
        setEdad('')
        setCargo('')
        setTelefono('')
    }
    return(
        <>
            <h3>Agregar colaborador</h3>
            <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Nombre del Colaborador"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="email" 
                    placeholder="Email del Colaborador"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Edad del Colaborador"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    placeholder="Cargo del Colaborador"
                    onChange={(e) => setCargo(e.target.value)}
                    value={cargo}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    placeholder="Telefono del Colaborador"
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                    />
                </Form.Group>
                <Button className='w-100' type='submit' variant="success">Agregar colaborador</Button>
            </Form>
        </>
    )
}
export default Formulario