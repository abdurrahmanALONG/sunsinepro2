import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>
        signOut(auth);

    return (
        <div class="drawer h-full drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col mb-auto">
                <div class="w-full navbar bg-base-300 px-20">
                    <div class="flex-1 px-2 mx-2 text-3xl">A.R-Storehouse</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-5">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li> 
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/additem">AddItem</NavLink></li>
                            <li><NavLink to="/myitem">MyItem</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {/* <li><NavLink to="/login">Login</NavLink></li> */}
                        
                            {
                                user ?
                                
                                    <button className='btn btn-link' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <NavLink className="mt-3" as={Link} to="Login">
                                        Login
                                    </NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/additem">AddItem</NavLink></li>
                    <li><NavLink to="/myitem">MyItem</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                    {
                        user ?
                            <button className='btn btn-link' onClick={handleSignOut}>Sign out</button>
                            :
                            <NavLink as={Link} to="Login">
                                Login
                            </NavLink>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Navbar;