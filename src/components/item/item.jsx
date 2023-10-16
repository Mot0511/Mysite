import React from 'react';
import cl from './item.module.css'
import Mybutton from "../mybutton/mybutton";
import {Link} from "react-router-dom";

const Item = ({id, img, title, href}) => {
    return (
        <div className={cl.site}>
            <center>
                <img src={img} />
                <h3>{title}</h3>
                <div className={cl.btns}>
                    <Mybutton href={href}>Посмотреть проект</Mybutton>
                    <Link to={`/${id}`}>Подробнее</Link>
                </div>

            </center>
        </div>
    );
};

export default Item;