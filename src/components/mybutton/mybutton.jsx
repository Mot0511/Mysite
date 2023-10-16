import React from 'react';
import cl from './mybutton.module.css'

const Mybutton = (props) => {
    return (
        <a href={props.href} target={'_blank'} {...props}><button className={cl.viewSite}>{props.children}</button></a>
    );
};

export default Mybutton;