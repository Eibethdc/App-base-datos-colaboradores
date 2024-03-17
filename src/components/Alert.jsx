import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({color, text}) => {
    return(
        <div className='pt-3'>
            <Alert variant={color}>
            <Alert.Heading>{text}</Alert.Heading>
            </Alert>
        </div>
    )
}

export default AlertComponent