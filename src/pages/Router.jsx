import { BrowserRouter, Switch, Route } from "react-router-dom";
import ECItemListContainer from '../components/ECItemListContainer';

export default function Router(props) {
    console.log(props)
    return (
        <BrowserRouter >
            <Switch>
                <BrowserRouter basename="/category">
                    <Route path="/:categoryId" component={ECItemListContainer} />
                </BrowserRouter>
                <Route path="/">
                    Base
                </Route>
            </Switch>
        </BrowserRouter>
    )
}