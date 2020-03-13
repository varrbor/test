import React from 'react';
import style from './preloader.module.css';

export default class extends React.Component {
    render() {
        return (
            <div className={style.body}>
                <div className={style.loader}>
                    <span>Loading...</span>
                </div> 
            </div>
        )
    }
}
