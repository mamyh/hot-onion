import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Food from '../food/Food';

const Lunch = () => {

    const foods = useFoods('../../lunch.json');
    console.log('i am in lunch')
    return (
        <div className="mx-auto w-4/5 grid grid-cols-3 gap-8">
            {foods.map(food => <Food key={Math.random()} food={food}></Food>)}
        </div>
    )
}

export default Lunch;
