import {Home, Landing, Form} from "./views";
import {Route, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DetailsContainer from "./components/DetailsContainer/DetailsContainer";
import axios from "axios";
import {useState} from "react";
import Detail from "./views/Detail/Detail";


function App() {
    const location = useLocation();
    const onSearch = (country) => {
        axios
            .get(
            `http://localhost:3001/countries/?name=${country}`
        )
            .then((response) => {
                    setCountriesByName((oldCountry) => [...oldCountry, response.data]);
                    console.log(countriesByName);
            });
    };

    const [countriesByName, setCountriesByName] = useState([]);

    return (
        <div className="App">
            {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
            <Route exact path="/" component={Landing}/>
            <Route exact path="/detail/:id" render={({match})=> <DetailsContainer id={match.params.id}/>}/>
            <Route exact path="/create" component={Form}/>
            <Route exact path="/home" component={Home}/>
        </div>
    );
}

export default App;