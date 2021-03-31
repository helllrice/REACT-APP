import React, { useState } from 'react';
import style from './Cards.module.css'
import { useEffect } from 'react';




function Cards() {
    const [cardList, setCardList] = useState(
        [
            {id: 1, order: 3,  text: 'Card 1', point: 'A', date: '12.03.2021'},
            {id: 2, order: 1,  text: 'Card 2', point: 'B', date: '07.12.2020'},
            {id: 3, order: 2,  text: 'Card 3', point: 'C', date: '02.10.2020'},
            {id: 4, order: 4,  text: 'Card 4', point: 'D', date: '13.01.2021'},
            {id: 5, order: 5,  text: 'Card 5', point: 'E', date: '05.02.2021'},
        ]
    )

    return(
        <div className={style.cards}>
            {cardList.map(card =>
                <div className={style.cardsItem} draggable={true}>
                    <div className={style.cardsTitle}>
                        <h2>{card.text}</h2>
                        <div className={style.cardsImg}>
                            <a href="#"><img src="images/move.png" alt="меню" className={style.cardMove} id='imgMove'/></a>
                            <a href="#"><img src="images/menu.png" alt="меню"/></a>
                            <div className={style.dropdownContent}>
                                <a href="#"><img src="images/edit.png"/>редактировать</a>
                                <a href="#"><img src="images/close.png"/>удалить</a>
                            </div>
                        </div>
                    </div>
                 <p className={style.cardText}>{card.point}</p>
                 <p className={style.cardText}>{card.date}</p>           
             </div>
                
                )}
        </div>
    )
    
    useEffect(() => {
            const dragAndDrop = () => {
                const card = document.querySelector('.cards');
                const cells = document.querySelectorAll('.cardsItem');

                for (let i = 0; i < cells.length; i ++) {
                    const dragStart = function () {
                        console.log('dragstart');
                    }
                    cells.addEventListener('dragstart', dragStart);
                };
                dragAndDrop()
                }

        },[]);
};






    



export default Cards;