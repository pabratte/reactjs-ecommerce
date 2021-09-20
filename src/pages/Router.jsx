import { Switch, Route, Redirect } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import Profile from "../components/Profile";
import Order from "../components/Order";

export default function Router() {
    return (
        <Switch>
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:itemId" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/order/:orderId" component={Order}/>
            <Route path="/">
                <Redirect to="/category/1"></Redirect>
            </Route>
        </Switch>
    )
}