import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteFavorite, setFavorite} from "../actions";
import '../assets/styles/components/CarouselItem.scss'
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
    const {id, cover, title, year, contentRating, duration, isList} = props;
    const handleSetFavorite = () => {
        props.setFavorite({id, cover, title, year, contentRating, duration})
    };
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                    <img className="carousel-item__details--img" src={play} alt="Play Icon"/>
                    </Link>
                    {
                        isList ?
                            <img
                                className="carousel-item__details--img"
                                src={removeIcon}
                                alt="Plus Icon"
                                onClick={() => handleDeleteFavorite(id)}
                            />
                            :
                            <img
                                className="carousel-item__details--img"
                                src={plus}
                                alt="Plus Icon"
                                onClick={handleSetFavorite}
                            />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    isList: PropTypes.bool,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
