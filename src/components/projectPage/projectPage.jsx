import React from 'react';
import {useParams} from "react-router-dom";
import items from '../../projects.json'
import cl from './projectPage.module.css'
import Mybutton from "../mybutton/mybutton";

const ProjectPage = () => {

    const id = useParams().id
    const data = items.filter(item => item.id == id)[0]

    return (
        <div className={cl.content}>
            <div className={cl.column1}>
                <img src={require(`../../img/${id}.png`)} alt=""/>
                <Mybutton href={data.link}>Посмотреть проект</Mybutton><br/>
                <a href={data.github} target={"_blank"}>Github репозиторий проекта</a>
            </div>
            <div className={cl.column2}>
                <h1>{data.title}</h1>
                <p>Используемый стек технологий</p>
                <ul>
                    {
                        data.technologies.map(tech => <li>{tech}</li>)
                    }
                </ul>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default ProjectPage;