import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ECItemListContainer from '../components/ECItemListContainer';

export default function Router(props) {
    console.log(props)
    return (
        <Switch>
            <Route path="/category/:categoryId" component={ECItemListContainer} />
              
            <Route path="/">
                <Redirect to="/category/MLA5725"></Redirect>
            </Route>
        </Switch>
    )
}