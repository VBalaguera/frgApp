//CATEGORIES EQUALS COLLECTION PREVIEW
import React from 'react';

import CategoriesItem from '../categories-items/categories-item.component'; 

import './categories.styles.scss';

const Categories = ({title, items}) => (

    <div className='categories'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='categories-items'>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CategoriesItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default Categories; 