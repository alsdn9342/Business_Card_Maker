import React from 'react';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './cardMaker.module.css'
const CardMaker = ({cards}) => 
<section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map(card => (
        <Card_edit_form key={card.id} card={card} />
    ))}

</section>;

export default CardMaker;