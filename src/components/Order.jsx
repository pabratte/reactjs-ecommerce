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
        <Container className="mt-3">
            { loading && <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert> }
            { !loading && !order && <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert> }
            { !loading && order &&
                <>
                    <h1>Your order is ready!</h1>
                    <h4>Order Code: {orderId}</h4>
                    <Table >
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item) => <tr><td>{item.title}</td><td>{item.price}</td><td>{item.quantity}</td><td>${parseInt(item.price)*parseInt(item.quantity)}</td></tr>)}
                            <tr><th colspan="4"></th></tr>
                            <tr>
                                <th colspan="3">Total</th>
            
            
                                <th>${order.total}</th>
                            </tr>
                        </tbody>
                    </Table>

                    
                    
                    <Button onClick={onContinueShopping}>Continue shopping</Button>
                </>
            }

        </Container>
    )
}
