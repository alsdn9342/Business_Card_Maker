import React from 'react';
import Card from '../card/card';
import styles from './cardReview.module.css'
const CardReview = ({cards}) => 
    <section className={styles.preview}>
    <h1 className={styles.title}>Card preview</h1>
        <ul className={styles.cards}>
        {
            cards.map(card => (
                <Card key={card.id} card={card} />
              ))
        }
        </ul>
    </section>;

export default CardReview;