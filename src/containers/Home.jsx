import React from 'react';
import Header from "../components/Header";
import '../assets/styles/App.scss';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = 'http://localhost:3000/initialState';

const Home = () => {

    const initialState = useInitialState(API);

    return initialState.length === 0 ? <h2>Cargando...</h2> : (
        <div className="App">
            <Header/>
            <Search/>
            {
                initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )
                    }
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Videos">
                <Carousel>
                    {
                        initialState.originals.length > 0 &&
                        initialState.originals.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )
                    }
                </Carousel>
            </Categories>
            <Footer/>
        </div>
    );
};

export default Home;
