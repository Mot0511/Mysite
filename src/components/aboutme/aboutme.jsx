import React from 'react';
import cl from './aboutme.module.css'

const Aboutme = () => {
    return (
        <div className={cl.aboutme} id={'aboutme'}>
            <center><h2>Обо мне</h2></center><br />
            <div className={'container'}>
                <p>
                    Привет, меня зовут Матвей. Я - веб-разработчик, специализируюсь на создании сайтов.
                    В основном делаю frontend части сайтов, но также имею опыт в создании backend частей.<br /><br />
                    Мой стек используемых технологий:
                    <ul>
                        <li>html/css/js</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Typescript</li>
                        <li>Git</li>
                    </ul>

                </p>
            </div>
        </div>
    );
};

export default Aboutme;