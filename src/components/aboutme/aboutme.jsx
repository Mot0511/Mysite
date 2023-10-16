import React from 'react';
import cl from './aboutme.module.css'

const Aboutme = () => {
    return (
        <div className={cl.aboutme} id={'aboutme'}>
            <center><h2>Обо мне</h2></center><br />
            <div className={'container'}>
                <p>
                    Привет, меня зовут Матвей. Я специализируюсь на создании сайтов, в частности frontend частей. С удовольствием сделаю для Вас сайт на любую тематику. К сайту обязательно сделаю адаптацию под мобильные устройства, добавлю плавные анимации, если вы не против.
                    Если нужно, я не против поработать и с backend частью сайта, так как имею опыт. Могу сделать для сайта прослушивание запросов с клиентской части, могу организовать занесение записей в базу данных сервера, например, для регистрации или авторизации пользователей Вашего сайта.
                    <br /><br />
                    Технологии, освоенные мной:

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                    <a href="https://github.com/Mot0511?tab=repositories" target={'_blank'}>Мой Github</a><br/>
                    <a href="https://t.me/Mot0511" target={'_blank'}>Мой телеграм</a>

                </p>
            </div>
        </div>
    );
};

export default Aboutme;