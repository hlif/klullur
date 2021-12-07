import React, { useState, useEffect } from 'react';
import { getCategories } from '../api/categories';


export const Categories = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories()
            .then(setCategories)
            .then((res) => { setLoading(false); console.log("hrello", res); });
    }, []);

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <>
                {categories.map((category) => {
                    return (
                        <div>{category}</div>
                    )
                })}
            </>
        )
    }
}