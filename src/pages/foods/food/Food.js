import React from 'react'

const Food = ({ food }) => {
    const { Name, img, description, price } = food;

    return (
        <div className="text-center p-4 transition-all hover:shadow-lg hover:scale-100">
            <div className="flex justify-center my-4" >
                <img className="w-20 h-20 rounded-full" src={img} alt="" />
            </div>
            <h1 className="text-xl font-bold">{Name}</h1>
            <p>{description}</p>
            <p className="text-3xl font-bold text-purple-300">${price}</p>
        </div>
    )
}

export default Food
