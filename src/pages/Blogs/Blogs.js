import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='my-5'>
            <h1 className=' mb-4 text-center'>Our Wearhouse Blogs</h1>
            <div className='ourblogs'>
                <div className='text-center my-10'>
                    <h5 className='text-4xl'>WAREHOUSING</h5>
                    <p>Warehousing is the process of storing physical inventory for sale or distribution......</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' >Learn more..</Link> </p>
                </div>
                <div className='text-center my-10'>
                    <h5 className='text-4xl'>PACKAGING & STORAGE</h5>
                    <p>Packaging is essential to protect the product and therefore is very important to choose the best types of packing materials....</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none'  >Learn more..</Link> </p>
                </div>
                <div className='text-center my-10'>
                    <h5 className='text-4xl'>TIME BOUND DELIVERIES</h5>
                    <p>In short wherever you keep up your commitment with your customer, they are called time bound deliveries....</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none'>Learn more..</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;