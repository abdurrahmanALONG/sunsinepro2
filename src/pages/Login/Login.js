// import React, { useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import GoogleLogin from './GoogleSignin';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loding from '../shared/Loding';
// import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import axios from 'axios';

// const Login = () => {
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
//     const emailRef = useRef('');
//     const passwordRef = useRef('');
//     const navigate = useNavigate();
//     const location = useLocation();
//     let errorHandel;
//     let from = location.state?.from?.pathname || "/";
//     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
//     const navigateRegiestarPage = event => {
//         navigate('/registration');
//     }



//     // if (loading || sending) {
//     //     return <Loding></Loding>
//     // }
//     if (error) {
//         errorHandel = <div>
//             <p className='text-danger'>Error: {error?.message}</p>
//         </div>
//     }
//     if (user) {
//         navigate(from, { replace: true });
//     }


//     const handelLogin = async (event) => {
//         console.log("hello")
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         // signInWithEmailAndPassword (email, password);
//         // console.log( email, password);
//         await signInWithEmailAndPassword(email, password);
//         // const { data } = await axios.post('http://localhost:5000/login', { email });
//         // localStorage.setItem('accessToken', data.accessToken);
//         navigate(from, { replace: true });
//     }


//     const resetPassword = async () => {
//         const email = emailRef.current.value;
//         if (email) {
//             await sendPasswordResetEmail(email);
//             toast('Sent email Successfully');
//         }
//         else {
//             toast('please enter your email address');
//         }
//     }

//     return (
//         <div>
//             <section class="text-gray-600 body-font">
//                 <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
//                     <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
//                         <h2 class="text-indigo-600 text-3xl font-medium title-font mb-5 font-bold">Login</h2>
//                         <form onSubmit={handelLogin}>
//                             <div class="relative mb-4">
//                                 <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
//                                 <input type="email" id="" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                             </div>
//                             <div class="relative mb-4">
//                                 <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
//                                 <input type="password" id="" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                             </div>
//                             {/* <button class="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Login</button> */}
//                             <input
//                                 class="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//                                 type="submit"
//                                 value="Login" />
//                         </form>

//                         <div className="relative my-4">
//                             <p> If you are new here... <Link to="/registration" className="text-base-100 pe-auto text-decoration-none  " onClick={navigateRegiestarPage}>Please Register First</Link> </p>
//                             <p>Forget Password? <button className='text-base-100 pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button> </p>
//                         </div>
//                         <div className="relative my-4 mx-auto">
//                             <GoogleLogin />
//                             <ToastContainer></ToastContainer>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </div>
//     );
// };

// export default Login;



import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../shared/Loding';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center back'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/registration">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;