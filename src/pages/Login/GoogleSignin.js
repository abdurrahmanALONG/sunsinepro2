import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/google-logo.png';
import Loding from '../shared/Loding';



const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorHandel;

    // if (loading) {
    //     return <Loding></Loding>
    // }
    if (error) {
        errorHandel = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    if (user) {
        navigate('/');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                {/* <div style={{ height: '1px' }} className='bg-primary w-50'></div> */}
                <p className='my-2 px-2 text-center text-2xl text-primary'>or</p>
                {/* <div style={{ height: '1px' }} className='bg-primary w-50'></div> */}
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={logo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;