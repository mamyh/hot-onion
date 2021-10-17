import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Food from '../food/Food';

const Dinner = () => {

    const foods = useFoods('../../dinner.json');
    console.log('i am from dinner');
    return (
        <div className="w-4/5 mx-auto grid grid-cols-3 gap-8">
            {foods.map(food => <Food key={Math.random()} food={food}></Food>)}
        </div>
    )
}

export default Dinner;
