import React from 'react';
import cl from './header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-4'}>
                        <h3 className={cl.heading}>MatveySuvorov</h3>
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={cl.menu}>
                            <Link to={'/'}>Главная</Link>
                            <Link to={'#projects'}>Мои сайты</Link>
                            <Link to={'#aboutme'}>Обо мне</Link>
                        </div>
                    </div>
                    <div className={'col-lg-4'}>
                        <h3 className={cl.email}>suvorov.matvej9@gmail.com</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;