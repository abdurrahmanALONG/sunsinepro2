import React, { useEffect, useState } from 'react';
import './ItemDetail.css'

import { NavLink, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://sunsineprotwo.herokuapp.com/products/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, []);

    // This is for Add New Quantity
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity);
        const newQuantity = parseInt(event.target.name.value);
        const totalNewQuantity = oldQuantity + newQuantity;
        const updatedQuantity = { totalNewQuantity };
        const url = `https://sunsineprotwo.herokuapp.com/products/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Are you sure!!!');
                event.target.reset();
                window.location.reload();
            })
    }




    // this is for Delivered
    const handleDicrisQuantityByOne = event => {
        event.preventDefault();
        const quantityCurrent = parseInt(item.quantity);
        const totalNewQuantity = quantityCurrent - 1;
        const updatedQuantity = { totalNewQuantity };
        const url = `https://sunsineprotwo.herokuapp.com/products/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Are you sure!!!');
                event.target.reset();
                window.location.reload();
            })
    }


    return (
        <div className=' bg-base-200'>

            <div className=' detailstyle justify-items-center'>
                <form onSubmit={handleDicrisQuantityByOne}>
                    <div className="card w-96 bg-info my-8 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.img} alt="Item" class="rounded-xl" />
                        </figure>
                        <div className=" card-body items-center text-center">
                            <h2 className="card-title text-2xl">{item.name}</h2>
                            <div className='flex justify-center gap-6'>
                                <h2 className="card-title text-xl">{"$" + item.price}</h2>
                                <h2 className="card-title text-xl">{item.quantity}</h2>
                                <h2 className="card-title text-xl">{item.suppliername}</h2>
                            </div>
                            <p className='overflow-hidden text-ellipsis'>{item.details}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary" type="submit">Delivered</button>
                            </div>
                        </div>
                    </div>
                </form>

                <form class="w-full flex flex-wrap items-center" onSubmit={handleUpdateQuantity}>
                    <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full md:mt-0">
                        <div class=" my-3">
                            <input type="number" id="" name="name" placeholder="Put New Quantity" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button class="text-white btn btn-primary border-0 py-2 px-8  rounded text-lg" type="submit" >Add New Quantity</button>
                        <div className='my-10 px-auto text-center'>
                            <NavLink to="/products" className='btn btn-primary pe-auto text-center'>
                                Manage Inventories
                            </NavLink>
                        </div >
                    </div>

                </form>
            </div>

        </div>
    );
};

export default ItemDetail;