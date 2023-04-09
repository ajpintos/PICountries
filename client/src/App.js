import {Home, Landing, Form} from "./views";
import {Route, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DetailsContainer from "./components/DetailsContainer/DetailsContainer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {countryByName} from "./redux/actions";


function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    const onSearch = (countryName) => {
        axios
            .get(`http://localhost:3001/countries/?name=${countryName}`)
            .then((response) => {
                dispatch(countryByName(response.data));
/*                console.log("Este es el contenido de response.data",response.data)
                console.log("Este es el contenido de countryByName(response.data)",countryByName(response.data));*/
            });
    };


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