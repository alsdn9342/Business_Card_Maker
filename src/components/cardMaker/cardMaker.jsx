import React from 'react';
import CardAddform from '../card_add_form/card_add_form';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './cardMaker.module.css'
const CardMaker = ({cards, addCard}) => 
<section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map(card => (
        <Card_edit_form key={card.id} card={card} />
    ))}
<CardAddform onAdd={addCard} />
</section>;

export default CardMaker;