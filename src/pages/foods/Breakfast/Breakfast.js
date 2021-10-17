import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Food from '../food/Food';

const Breakfast = () => {

    const foods = useFoods('../../breakfast.json');
    console.log('i am from breakfast')
    return (
        <div className="mx-auto w-4/5 grid grid-cols-3 gap-8">
            {foods.map(food => <Food key={Math.random()} food={food}></Food>)}
        </div>
    )
}

export default Breakfast
