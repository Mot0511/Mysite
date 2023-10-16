import React from 'react';
import {useState} from "react";
import cl from './projects.module.css'
import Item from '../item/item'
import items from '../../projects.json'
import WelcomeWin from "../welcomeWin/welcomeWin";

const Projects = () => {

    return (
        <>
            <WelcomeWin />
            <div>
                <h2 className={cl.heading} id={"projects"}>Мои сайты</h2>
                <div className={cl.projects}>
                    {
                        items.map(item => <Item id={item.id} title={item.title} img={require(`../../img/${item.id}.png`)} href={item.link} />)
                    }
                </div>
                <hr />
            </div>
        </>
    );
};


export default Projects;