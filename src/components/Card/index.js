import React from 'react'
import cl from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

import s from './Card.module.scss';

class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    }

    handleCardClick = () => {
        this.setState( ( {done} ) => {
            return{
                done: true,
            }
        } );
    }

    handleIsRememberedClick = () => {
        this.setState( ( {isRemembered} ) => {
            return{
                isRemembered: true,
                done: true
            }
        })
    }

    handleDeletedClick = () =>{
        console.log('level1');
        this.props.onDeleted();
    }

    render() {
        const { eng, rus } = this.props;
        const { done, isRemembered } = this.state;
        
        return (
            <div className={s.root}>
                <div
                    className={ cl(s.card, { 
                        [s.done]: done,
                        [s.isRemembered]: isRemembered
                    }) }
                    onClick={ this.handleCardClick }
                >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            {eng}
                        </div>
                        <div className={s.cardBack}>
                            {rus}
                        </div>
                    </div>
                </div>
                <div className={s.icons}>
                    <CheckSquareOutlined onClick={this.handleIsRememberedClick}/>
                </div>
                <div className={cl(s.icons, s.deleted)}>
                    <DeleteOutlined onClick={this.handleDeletedClick}/>
                </div>
            </div>
        )
    }

}


export default Card;
