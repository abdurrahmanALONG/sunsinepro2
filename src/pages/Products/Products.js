import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './ProductCard';
import './Products.css'

const Products = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://sunsineprotwo.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sunsineprotwo.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(itemDelete => itemDelete._id !== id);
                    setItems(remaining);
                    toast('Delete Successfully');
                })
        }
    }



    return (
        <div className='my-8 mx-4'>
            <h1 className=' mb-3 text-center text-5xl font-bold'>OUR ITEMS</h1>
            <div className='productshow justify-items-center'>
                {
                    items.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        handelDelete={handelDelete}
                    ></ProductCard>)
                }
            </div>
            <div className='my-3 text-center'>
            <Link to="/additem" className='btn btn-primary pe-auto text-center'>
                Manage Inventories
            </Link>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Products;