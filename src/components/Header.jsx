import React from "react";
import orge from "../img/favicon.ico";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = React.useState("");

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(API.fetchAsyncMovies(term));
        dispatch(API.fetchAsyncShows(term));
    };

    return (
        <React.Fragment>
        <main className="header">
            <section className="logo">
                <Link to="/">Movie App</Link>
            </section>
            <section className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={term} 
                        placeholder="Search Movies or Shows" 
                        onChange={handleChange}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </section>
            <section className="user-image">
                <img src={ orge } alt="user" />
            </section>
        </main>
        </React.Fragment>
    );
};

