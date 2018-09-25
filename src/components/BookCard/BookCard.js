import React from "react";
import "./BookCard.css";

const BookCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectBook(props.cover)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.cover} src={props.image} />
            </a>
        </div>
    </div>
);

export default BookCard;
