import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { baseColaboradores } from './baseColaboradores'
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import AlertComponent from './components/Alert';
import Buscador from './components/Buscador';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [listadoColaboradores, setListadoColaboradores] = useState(baseColaboradores)
  const [message, setMessage] = useState({
    text: '',
    color: ''
  })

  const setAlert = (newAlert) =>{
    setMessage(newAlert)
  }

  return (
    <>
      <Container>
        <Row>
          <h1>Lista de colaboradores</h1>
        </Row>
        <Row>
          <Buscador listadoColaboradores={listadoColaboradores} setListadoColaboradores={setListadoColaboradores}/>
        </Row>
        <Row>
          <Col lg={8}>
            <Listado listadoColaboradores={listadoColaboradores}/>
          </Col>
          <Col lg={4} >
            <Formulario listadoColaboradores={listadoColaboradores} setListadoColaboradores={setListadoColaboradores} setAlert={setAlert}/>
            <AlertComponent color={message.color} text={message.text}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
