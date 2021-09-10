import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer'
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardReview from '../cardReview/cardReview';


const Maker = ({authService}) => {
    const [cards, setCards] = useState([{
        id: '1',
        name: 'Minwoo',
        company:'Apple',
        theme:'dark',
        email:'minwoo@gmail.com',
        message:'go for it',
        fileName:'minwoo',
        fileURL: null,
    },
    {
        id: '2',
        name: 'Minwoo2',
        company:'Apple',
        theme:'light',
        email:'minwoo@gmail.com',
        message:'go for it',
        fileName:'minwoo',
        fileURL: 'zz'
    },
    {
        id: '3',
        name: 'Minwoo3',
        company:'Apple',
        theme:'colorful',
        email:'minwoo@gmail.com',
        message:'go for it',
        fileName:'minwoo',
        fileURL: 'zz'
    }      
])
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
               history.push('/');
            }
        });
    });

   const addCard = (card) => {
      const updated = [...cards, card];
      setCards(updated);
    }
    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}  />
            <div className={styles.container}>
                <CardMaker cards={cards} addCard={addCard}  />
                <CardReview cards={cards}  />
            </div>
            <Footer />

        </section>
    )
};

export default Maker;