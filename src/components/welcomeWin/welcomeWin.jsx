import React from 'react';
import cl from './welcome.module.css'

const WelcomeWin = () => {
    return (
        <div className={cl.win}>
            <h1>
                Привет! Я Матвей Суворов<br />
                Занимаюсь frontend разработкой <br />
                Этой мой официальный сайт<br />
            </h1>
        </div>
    );
};

export default WelcomeWin;