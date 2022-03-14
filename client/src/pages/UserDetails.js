import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../UserService';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// import "https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css";
// import "https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

function UserDetails() {
    let {id} = useParams();
    const [userObject, setUserObject] = useState({});
 
    useEffect(() => {
        UserService.userDetails(id).then((response) => {
            if(response.data.error){
                alert(response.data.error);
            } else {
                setUserObject(response.data);
            }
        })
    }, [])

      const jwtDecode = (token) => {
        var base64Payload = token.split('.')[1];
        var payload = atob(base64Payload);
        return JSON.parse(payload.toString());
      }
    
      const tokenPayload = () => {
        const token = sessionStorage.getItem('accessToken');
        const payload = jwtDecode(token);
        console.log(payload);
        return payload;
      }
      
      const isLoggedIn = () => {
        const token = sessionStorage.getItem('accessToken');
        console.log(token);
        if(token) {
          return true;
        } else {
          return false;
        }
      }

  return (
      
    <div>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

        <main class="profile-page">
        
            <section class="relative block h-500-px">
                {/* <h1>UserDetails</h1>
                <h2>{userObject.name}, {userObject.email}</h2> */}
                
                <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage: `url('https://images.pexels.com/photos/5327476/pexels-photo-5327476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`}}>
                    {/* <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span> */}
                    <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
            <div class="flex items-center mt-4 justify-between">
                <div>
                    <Link to="/" class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 uppercase" >CHRONICLES GYM center</Link>
                </div>
    
              
                <div class="flex lg:hidden">
                    <button type="button"
                        class="text-gray-500 navbar-toggler hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        // aria-label="toggle menu"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
    
            <div class="collapse show items-center flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0" id="navbarSupportedContent">
                
                <Link to="/" class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"> 
                  Home
                </Link>

                <a class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Protein
                </a>

                <a class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Body Type
                </a>

                <a class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Exercises
                </a>

                <a class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Support
                </a>

                <a class="text-gray-200 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      About
                </a>
            
                {/* <Link to="/register" class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500">
                  Join us
                </Link>

                <Link to="/login" class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500">
                  Login
                </Link> */}

            </div>
    
            {isLoggedIn() ? 
              <Link to={`/user/${id}`} class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-200 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-white dark:hover:text-black dark:text-white dark:bg-black lg:mt-0 hover:bg-gray-100 hover:text-white lg:w-auto">
                <p>{tokenPayload().name.split(' ')[0]}</p>
              </Link>
              :              
              <Link to="/login" class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-200 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-white dark:hover:text-black dark:text-white dark:bg-black lg:mt-0 hover:bg-gray-100 hover:text-white lg:w-auto">
                <p>Login</p>
              </Link>
            }
            
        </nav>
                </div>

                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: 'translateZ(0px)'}}>
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>

            <section class="relative py-16 bg-blueGray-200">
                    <div class="container mx-auto px-4">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="relative">
                                    <img alt="..." width={800} height={800} src="https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                                </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-6 px-3 mt-32 sm:mt-0">
                                    {/* <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                    Connect
                                    </button> */}
                                </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div class="mr-4 p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span><span class="text-sm text-blueGray-400"></span>
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span><span class="text-sm text-blueGray-400"></span>
                                    </div>
                                    <div class="lg:mr-4 p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span><span class="text-sm text-blueGray-400"></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                {userObject.name}
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                {userObject.address} <br/> {userObject.pincode}
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-weight-hanging mr-2 text-lg text-blueGray-400"></i>Weight: {userObject.weight}
                                </div>
                                <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-mobile mr-2 text-lg text-blueGray-400"></i> {userObject.mobile}
                                </div>
                                <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-envelope mr-2 text-lg text-blueGray-400"></i> {userObject.email}
                                </div>
                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                {/* <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range, Jenna the name taken by
                                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                    performs and records all of his own music, giving it a
                                    warm, intimate feel with a solid groove structure. An
                                    artist of considerable range.
                                    </p>
                                    <a href="#pablo" class="font-normal text-pink-500">Show more</a>
                                </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                        <div class="container mx-auto px-4">
                            <div class="flex flex-wrap items-center md:justify-between justify-center">
                            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                                {/* <div class="text-sm text-blueGray-500 font-semibold py-1">
                                Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                </div> */}
                            </div>
                            </div>
                        </div>
                    </footer>
            </section>


        </main>
        {/* <h1>UserDetails</h1>
        <h2>{userObject.name}, {userObject.email}</h2> */}
    </div>
  )
}

export default UserDetails