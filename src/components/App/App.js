import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App