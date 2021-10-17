import { useEffect, useState } from "react"


const useFoods = (foodPath) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(foodPath)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [foodPath]);

    return foods;
}

export default useFoods;