import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import App from "../../App";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])
    return (
        <div>
        {/*<h1>Esta es la vista de Home</h1>*/}
            <CardsContainer />
        </div>
    )
}

export default Home