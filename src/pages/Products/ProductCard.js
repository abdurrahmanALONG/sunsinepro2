import React from 'react';

const ProductCard = ({ product, handelDelete }) => {
    const { _id, name, img, price, quantity, suppliername, details } = product;
    return (
        <div className="card w-96 bg-info my-8 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Item" class="rounded-xl" />
            </figure>
           <form>
           <div className=" card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <div className='flex justify-center gap-6'>
                    <h2 className="card-title text-xl">{"$" + price}</h2>
                    <h2 className="card-title text-xl">{quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <h2 className="card-title text-xl">{suppliername}</h2>
                </div>
                <p className='overflow-hidden text-ellipsis'>{details}</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => handelDelete(product._id)} >Delete</button>
                </div>
            </div>
           </form>
        </div>
    );
};

export default ProductCard;