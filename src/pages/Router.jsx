import { Switch, Route, Redirect } from "react-router-dom";
import ECItemListContainer from '../components/ECItemListContainer';
import ECItemDetailContainer from '../components/ECItemDetailContainer';
import ECCart from '../components/ECCart';
import ECCheckout from "../components/ECCheckout";

export default function Router() {
    return (
        <Switch>
            <Route path="/category/:categoryId" component={ECItemListContainer} />
            <Route path="/item/:itemId" component={ECItemDetailContainer} />
            <Route path="/cart" component={ECCart}/>
            <Route path="/checkout" component={ECCheckout}/>
            <Route path="/">
                <Redirect to="/category/MLA5725"></Redirect>
            </Route>
        </Switch>
    )
}