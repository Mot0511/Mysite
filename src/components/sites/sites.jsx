import React from 'react';
import {useState} from "react";
import cl from './sites.module.css'
import Item from '../item/item'

import s1 from '../../img/1.png'
import s2 from '../../img/2.png'
import s3 from '../../img/3.png'
import s4 from '../../img/4.png'
import s5 from '../../img/5.png'

const Sites = () => {

    let [listClasses, setListClasses] = useState([cl.sites])
    let [hideDeployBtSites, setHideDeployBtSites] = useState([cl.deployBt])

    const deployListSites = () => {
        setListClasses([cl.sites, cl.sitesDeploy])
        setHideDeployBtSites([cl.deployBt, cl.hideDeployBt])
    }
    return (
        <div>
            <h2 className={cl.heading} id={"sites"}>Мои сайты</h2>
            <div className={listClasses.join(' ')}>
                    <Item img={s1} title={'Небольшой шаблон для сайта частой школы'} href={'https://mot0511.github.io/OnlineSchoolT/'}/>
                    <Item img={s2} title={'Шаблон для сайта портфолио'} href={'https://mot0511.github.io/PortfolioSite/'}/>
                    <Item img={s3} title={'Cайт для электромонтажной компании'} href={'http://a0755720.xsph.ru/Elkris/'}/>
                    <Item img={s4} title={'Верстка некого красивого шаблона'} href={'https://mot0511.github.io/LearnEng/'}/>
                    <Item img={s5} title={'Небольшой шаблон для сайта по курсам английского языка'} href={'https://mot0511.github.io/Waxom/'}/>
            </div>
            <button onClick={deployListSites} className={hideDeployBtSites.join(' ')}>Показать все сайты</button>
        </div>
    );
};

export default Sites;