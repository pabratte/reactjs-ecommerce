import React, {useEffect} from 'react'
import { Alert, Button, Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getOrder } from '../utils/API'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { useHistory} from 'react-router-dom'

export default function Order () {
    let {orderId} = useParams()
    const [order, setOrder] = React.useState(undefined)
    const [errorMsg, setErrorMsg] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const history = useHistory()

    const onContinueShopping = () => {
        history.push("/")
    }

    useEffect(() => {
      setLoading(true)
      getOrder(orderId).then(order => {
        setLoading(false)  
        setOrder(order)
      }).catch( err => {
        setOrder(null)
        setErrorMsg(err)
      })
    }, [orderId])
    return (
        <>
        
            { loading && <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Cargando...</span></Alert> }
            { !loading && !order && <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert> }
            { !loading && order &&
                <>
                    <h3>Su compra está lista</h3>
                    <Table >
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                                <th className="align-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item) => <tr><td>{item.title}</td><td>${item.price}</td><td>{item.quantity}</td><td className="align-right">${parseInt(item.price)*parseInt(item.quantity)}</td></tr>)}
                            <tr><th colspan="4"></th></tr>
                            <tr>
                                <th colspan="3">Total</th>
            
            
                                <th className="align-right">${order.total}</th>
                            </tr>
                        </tbody>
                    </Table>
                    <p className="order-id">Código de orden: {orderId}</p>
                    
                    <div className="d-flex justify-content-end">
                    <Button className="button-primary btn-lg" onClick={onContinueShopping}>Volver a la página principal</Button>
                    </div>
                </>
            }

        </>
    )
}
