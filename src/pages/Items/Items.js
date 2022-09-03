import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import "./Items.css"

const Items = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    return (
        <div className='mt-20 '>
            <h1 className=' mb-10 text-center text-5xl font-bold'>OUR ITEMS</h1>
            <div className='itemsshow justify-items-center'>
                {
                    items.slice(0, 6).map(item => <ItemCard
                        key={item._id}
                        item={item}
                    // handleUpdateQuantity = {handleUpdateQuantity}
                    ></ItemCard>)
                }
            </div>
            {/* <div className='my-3 text-center'>
                <Link to="/Items" className='btn btn-primary pe-auto text-center'>
                    Manage Inventories
                </Link>
            </div> */}
        </div>
    );
};

export default Items;