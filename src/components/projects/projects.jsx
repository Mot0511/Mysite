import React from 'react';
import {useState} from "react";
import cl from './projects.module.css'
import Item from '../item/item'

const Projects = () => {

    let [listClassesSites, setListClassesSites] = useState([cl.projects])
    let [hideDeployBtSites, setHideDeployBtSites] = useState([cl.deployBt])

    const deployListSites = () => {
        setListClassesSites([cl.projects, cl.Deploy])
        setHideDeployBtSites([cl.deployBt, cl.hideDeployBt])
    }
    return (
        <div>
            <h2 className={cl.heading} id={"projects"}>Мои сайты</h2>
            <div className={listClassesSites.join(' ')}>
                    <Item img={require('../../img/1.png')} title={'Небольшой шаблон для сайта частой школы'} href={'https://mot0511.github.io/OnlineSchoolT/'}/>
                    <Item img={require('../../img/9.png')} title={'Верстка макета Boldo'} href={'https://boldo-psi.vercel.app/'}/>
                    <Item img={require('../../img/2.png')} title={'Шаблон для сайта портфолио'} href={'https://mot0511.github.io/PortfolioSite/'}/>
                    <Item img={require('../../img/4.png')} title={'Небольшой шаблон для сайта по курсам английского языка'} href={'https://mot0511.github.io/LearnEng/'}/>
                    <Item img={require('../../img/5.png')} title={'Верстка некого красивого шаблона'} href={'https://mot0511.github.io/Waxom/'}/>
                    <Item img={require('../../img/7.png')} title={'Веб-приложение погоды'} href={'https://theweather-git-master-mot0511.vercel.app/'}/>
                    <Item img={require('../../img/8.png')} title={'Социальная сеть'} href={'https://leter.vercel.app/'}/>
            </div>
            {/*<button onClick={deployListSites} className={hideDeployBtSites.join(' ')}>Показать все сайты</button>*/}
            {/*<h2 className={cl.heading} id={"projects"}>Мои игры</h2>*/}
            {/*<div className={cl.projects}>*/}
            {/*        <Item img={cather} title={'Catcher'} href={'https://drive.google.com/file/d/1fQBqybQooViWdXn8polKcu_Na4s1xv08/view?usp=sharing'}/>*/}
            {/*        <Item img={clickmoney} title={'ClickMoney'} href={'https://mot0511.github.io/PortfolioSite/'}/>*/}
            {/*</div>*/}
            <hr />
        </div>
    );
};

export default Projects;