import React, { useState } from "react";
import styles from "./tariff.module.scss";

function Tarif(props) {

    let [selected, setSelected] = useState(props.isSelected);

    let handleSelect = () => {
        setSelected(!selected);
    };

    let bigCard = selected && styles.card_big;

    let cardColor = (props.color === 'red')
        ? styles.red :
        (props.color === 'green')
            ? styles.green :
            (props.color === 'blue')
                ? styles.blue :
                (props.color === 'black')
                    ? styles.black : ''
        ;

    return (

        <div className={`${styles.tarif_card} ${bigCard}`} onClick={handleSelect}>
            <h3 className={`${styles.tarif_card__name} ${cardColor}`}>{props.name}</h3>
            <div className={`${styles.tarif_card__price} ${cardColor}`}>руб &nbsp;<span className={styles.price_big}> {props.price} </span> <span className={styles.price_down}>&nbsp; /мес</span></div>
            <div className={styles.tarif_card__velocity}>до &nbsp;<span className={styles.velocity_big}> {props.velocity} </span> &nbsp; Мбит/сек</div>
            <div className={styles.tarif_card__text}>{props.text}</div>
        </div >
    )
}

export default Tarif;