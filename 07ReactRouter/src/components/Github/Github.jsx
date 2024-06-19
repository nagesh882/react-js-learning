import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/nagesh882')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github User: {data.name}
            <img src={data.avatar_url} alt="Git Picture" className="rounded-lg shadow-lg" width={200}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nagesh882')
    return response.json()
}