import React from 'react';
import cl from './item.module.css'

const Item = ({img, title, href}) => {
    return (
        <div className={cl.site}>
            <center>
                <img src={img} />
                <h3>{title}</h3>
                <a href={href} target={'_blank'}><button className={cl.viewSite}>Посмотреть сайт</button></a>
            </center>
        </div>
    );
};

export default Item;