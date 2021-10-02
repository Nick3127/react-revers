import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus  }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const [isLiked, setIsLiked] = React.useState(false);

    const onClickLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className={styles.card}>
    <div className={styles.favorite} onClick={onFavorite}>
        <img className={styles.like} onClick={onClickLike} width={17} height={17} src={isLiked ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Like" />
    </div>
    <img width={112} height={133} src={imageUrl} alt="Decks" />
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}</b>
        </div>
            <img className={styles.plus} onClick={onClickPlus} width={17} height={17} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="Plus" />
    </div>
</div>
    );
}

export default Card;