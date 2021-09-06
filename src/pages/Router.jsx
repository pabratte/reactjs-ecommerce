import { Switch, Route, Redirect } from "react-router-dom";
import ECItemListContainer from '../components/ECItemListContainer';
import ECItemDetailContainer from '../components/ECItemDetailContainer';
import ECCart from '../components/ECCart';
import ECCheckout from "../components/ECCheckout";
import Profile from "../components/Profile";
import Order from "../components/Order";

export default function Router() {
    return (
        <Switch>
            <Route path="/category/:categoryId" component={ECItemListContainer} />
            <Route path="/item/:itemId" component={ECItemDetailContainer} />
            <Route path="/cart" component={ECCart}/>
            <Route path="/checkout" component={ECCheckout}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/order/:orderId" component={Order}/>
            <Route path="/">
                <Redirect to="/category/1"></Redirect>
            </Route>
        </Switch>
    )
}