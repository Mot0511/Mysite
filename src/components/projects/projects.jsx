import React from 'react';
import {useState} from "react";
import cl from './projects.module.css'
import Item from '../item/item'

import s1 from '../../img/1.png'
import s2 from '../../img/2.png'
import s3 from '../../img/3.png'
import s4 from '../../img/4.png'
import s5 from '../../img/5.png'
import s6 from '../../img/6.png'
import s7 from '../../img/7.png'
import cather from '../../img/cather.png'
import clickmoney from '../../img/clickmoney.png'

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
                    <Item img={s1} title={'Небольшой шаблон для сайта частой школы'} href={'https://mot0511.github.io/OnlineSchoolT/'}/>
                    <Item img={s2} title={'Шаблон для сайта портфолио'} href={'https://mot0511.github.io/PortfolioSite/'}/>
                    <Item img={s3} title={'Cайт для электромонтажной компании'} href={'http://a0755720.xsph.ru/Elkris/'}/>
                    <Item img={s4} title={'Небольшой шаблон для сайта по курсам английского языка'} href={'https://mot0511.github.io/LearnEng/'}/>
                    <Item img={s5} title={'Верстка некого красивого шаблона'} href={'https://mot0511.github.io/Waxom/'}/>
                    <Item img={s6} title={'Онлайн калькулятор'} href={'https://calc-drab-gamma.vercel.app/'}/>
                    <Item img={s7} title={'Погода'} href={'https://theweather-auwwp20e3-mot0511.vercel.app/'}/>
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