// import React from 'react';
// import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import auth from '../../firebase.init';
// import Loding from '../shared/Loding';



// const RequireAuth = ({ children }) => {
//     const [user, loading] = useAuthState(auth);
//     const location = useLocation();
//     const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
//     if (sending || loading) {
//         return <Loding></Loding>
//     }

//     if (!user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     if (!user.emailVerified) {
//         return <div className='text-center mt-5'>
//             <h3 className='text-danger'>Your Email is not verified!!</h3>
//             <h5 className='text-success'> Please Verify your email address</h5>
//             <button
//                 className='btn btn-primary'
//                 onClick={async () => {
//                     await sendEmailVerification();
//                     toast('Sent email');
//                 }}
//             >
//                 Send Verification Email Again
//             </button>
//             <ToastContainer></ToastContainer>
//         </div>
//     }
//     return children;
// };

// export default RequireAuth;


import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loding';



const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;