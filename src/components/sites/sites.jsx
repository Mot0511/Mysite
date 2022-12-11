import React from 'react';
import cl from './sites.module.css'


const Sites = () => {
    return (
        <div>
            <h2 className={cl.heading} id={"sites"}>Мои сайты</h2>
            <div className={cl.sites + ' container'}>
                <div className={'row'}>
                    <div className="col-lg-4 site">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sites;