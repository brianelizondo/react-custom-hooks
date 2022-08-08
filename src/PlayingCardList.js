import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards, delCards] = useAxios("reactCards");
  const addCard = async () => {
    setCards("https://deckofcardsapi.com/api/deck/new/draw/", formating);
  };
  const deleteCards = async () => {
    delCards();
  };
  const formating = (data) => {
    return {
      image: data.cards[0].image
    }
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div>
        <button onClick={deleteCards}>Delete all cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
