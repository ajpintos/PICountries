import {Home, Landing, Detail, Form} from "./views";
import {Route, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DetailsContainer from "./components/DetailsContainer/DetailsContainer";
function App() {
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== "/" && <NavBar />}
            <Route exact path="/" component={Landing}/>
            <Route exact path="/detail/:id" component={DetailsContainer}/>
            <Route exact path="/create" component={Form}/>
            <Route exact path="/home" component={Home}/>
        </div>
    );
}

export default App;