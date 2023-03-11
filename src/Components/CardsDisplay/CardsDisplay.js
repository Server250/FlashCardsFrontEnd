import React from "react";
import { useState, useEffect } from "react";
import CardDisplay from "../CardDisplay/CardDisplay";
import Loading from "../Loading/Loading";
import NewCard from "../CardDisplay/NewCard/NewCard";
import SearchBar from "../SearchBar/SearchBar";

import './CardsDisplay.css';

let CardsDisplay = (props) => {

    const [cards, setCards] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    const handleGetCards = async() => {
        const newCards = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`, 
        {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });

        setCards(newCards);

    };

    const handleSaveCard = async(newCard) => {
        const newCards = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`, 
        {
            method:"POST",
            body: JSON.stringify({
                title: newCard.title,
                text: newCard.text
            }),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });

        
        setCards(newCards);
    };

    const handleDeleteCard = async(id) => {
        const newCards = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${id}`, 
        {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });

        setCards(newCards);
    }

    const handleEditCard = async(id, newCard) => {
        const newCards = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${id}`, 
        {
            method:"PATCH",
            body: JSON.stringify({
                title: newCard.title,
                text: newCard.text
            }),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });

        setCards(newCards);
    }

    const handleSetCards = async(newCards) => {
        setCards(newCards);
    }

    useEffect(() => {
        handleGetCards();
    }, []);

    const handleSearchCards = (val) => {
        setSearchVal(val);
    }

    return (
        <div className="cards-display_container">
            <div className="cards-display_navigation">
                <SearchBar onSearch={handleSearchCards}/>
            </div>

            <div className="cards-display_grid">
                { cards ? 
                    cards
                    .filter((c) => c.text.toLowerCase().includes(searchVal.toLowerCase()) || c.title.toLowerCase().includes(searchVal.toLowerCase()))
                    .map(card => 
                        <CardDisplay key={card.id} id={card.id} title={card.title} text={card.text} setCards={handleSetCards} deleteCard={handleDeleteCard} editCard={handleEditCard}/>
                    ) :
                    <Loading />
                }
                <NewCard saveCard={handleSaveCard}/>
            </div>
        </div>
    );

}

export default CardsDisplay;