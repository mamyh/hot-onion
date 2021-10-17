import React from 'react';
import "./banner.css"

const Banner = () => {

    return (
        <div className=" h-screen -mt-12 flex items-center justify-center">
            <div className="banner  h-3/4 w-full flex items-center justify-center">
                <div className="w-6/12 flex items-center justify-center">
                    <div>
                        <h1 className="text-2xl font-bold">Best Food waiting for your belly</h1>
                        <form >
                            <input type="text" placeholder="search your meal" className="w-3/4 z-0 p-2 mt-4 rounded-lg" />
                            <button className="text-white text-lg  font-medium bg-red-600 z-40 -ml-8 w-1/4 py-2 rounded-l-full rounded-r-full">Search</button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Banner
