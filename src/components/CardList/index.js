import React, { Component } from 'react';
import Card from '../Card';

import s from './CardList.module.scss';

class CardList extends Component {


    render() {
        const { items, onDeletedItem } = this.props;
        
        return (
            <> 
                <div className={s.root}>
                    {
                        items.map(({ eng, rus, id }) => (
                            <Card
                                onDeleted={ () => {
                                    console.log('level2')
                                    onDeletedItem(id)
                                }}
                                key={id}
                                eng={eng}
                                rus={rus}
                            />
                        ))
                    }
                </div>
            </>
        );
    }
}

export default CardList;
