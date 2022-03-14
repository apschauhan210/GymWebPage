import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const image = require('../images/image.png');
const newLogo = require('../images/newLogo.jpeg');

function Home() {

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
    <div class={"bg-zinc-900 dark:bg-zinc-900"}>
        
      <section class="bg-cover bg-no-repeat bg-center bg-gray-800 dark:bg-gray-800" style={{backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}>
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
                
                <Link to="/" class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"> 
                  Home
                </Link>

                <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Protein
                </a>

                <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Body Type
                </a>

                <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Exercises
                </a>

                <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Support
                </a>

                <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-red-400 hover:text-black-500"
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
              <Link to={`/user/${tokenPayload().id}`} class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-white dark:hover:text-black dark:text-white dark:bg-black lg:mt-0 hover:bg-gray-100 hover:text-white lg:w-auto">
                <p>{tokenPayload().name.split(' ')[0]}</p>
              </Link>
              :              
              <Link to="/login" class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-white dark:hover:text-black dark:text-white dark:bg-black lg:mt-0 hover:bg-gray-100 hover:text-white lg:w-auto">
                <p>Login</p>
              </Link>
            }
            
        </nav>
    
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-bold  tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                      IT’S ALL ABOUT WHAT YOU CAN ACHIEVE
                    </h1>
                    
                    <div class="mt-8 space-y-5">
                        <p class="flex items-center -mx-2 mt-2 text-gray-700 dark:text-gray-200">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> */}

                            <span class="mx-2">Empower yourself to make the changes you need to make</span>
                        </p>
                    </div>
                </div>
            </div>
    

            {!isLoggedIn() ?
                <div class="flex items-center justify-center w-full lg:w-1/2 col-2 justify-content-around d-flex flex-column">
              
                  <Link to="/register" type="button" class="h-10 w-50 sm:w-auto px-4 py-2 m-2 text-center text-black transition-colors duration-200 transform rounded-md opacity-100  border hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black dark:text-white hover:text-black focus:bg-gray-900 dark:focus:text-white">
                      <p to="/register" class="uppercase">JOIN US</p>
                  </Link>
                
                  <Link to="/login" type="button" class="h-10 w-50 sm:w-auto px-4 py-2 m-2 text-center text-black transition-colors duration-200 transform rounded-md opacity-100  border hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black dark:text-white hover:text-black focus:bg-gray-900 dark:focus:text-white">
                      <p to="/login" class="uppercase">LOGIN</p>
                  </Link>
                    {/* <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/> */}
                </div>
                :
                <div class="flex items-center justify-center w-full lg:w-1/2 col-2 justify-content-around d-flex flex-column"></div>
            }


            
        </div>
      </section>

      <section class="py-16 body-font mx-auto px-6 md:px-0  ">
      <div class="container px-2 lg:px-5 py-20 mx-auto  flex-wrap">
        <h1 class="text-5xl font-bold text-white mb-28 font-mono uppercase">Popular Classes</h1>
        <div class="grid sm:grid-cols-2 gap-4 grid-cols-2">
          <div>
            <div class="bg-cover bg-no-repeat bg-center bg-gray-300 mr-6 lg:mr-20 h-40   lg:h-80 lg:w-auto domain" style={{backgroundImage: "url('https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}></div>
            <h3 class="text-2xl font-semibold text-white mt-3 mb-7 domain">CARDIO<span class="text-gray-700"></span></h3>
          </div>
          <div>
            <div class="bg-cover bg-no-repeat bg-center bg-gray-300 mr-6 lg:mr-20 h-40  lg:h-80 lg:w-auto domain" style={{backgroundImage: "url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}></div>
            <h3 class="text-2xl font-semibold text-white mt-3 mb-7 domain">PRESS & BACK<span class="text-gray-700"></span></h3>
          </div>
          <div>
            <div class="bg-cover bg-no-repeat bg-center bg-gray-300 mr-6 lg:mr-20 h-40   lg:h-80 lg:w-auto domain" style={{backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=992,h=736,fit=crop/YZ4e36r205iW0o7Z/woman-in-black-sports-bra-and-black-pants-sitting-on-white-m26LKr5ZNeiyXWBK.jpg')"}}></div>
            <h3 class="text-2xl font-semibold text-white mt-3 mb-7 domain">AIR YOGA<span class="text-gray-700"></span></h3>
          </div>
          <div>
            <div class="bg-cover bg-no-repeat bg-center bg-gray-300 mr-6 lg:mr-20 h-40   lg:h-80 lg:w-auto domain" style={{backgroundImage: "url('https://images.pexels.com/photos/5327534/pexels-photo-5327534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}></div>
            <h3 class="text-2xl font-semibold text-white mt-3 mb-7 domain">LIFTING<span class="text-gray-700"></span></h3>
          </div>
        </div>
      </div>
      </section>

      <footer class="text-white bg-zinc-900 dark:bg-zinc-900 body-font">
        <div
          class="
            container
            px-5
            py-8
            mx-auto
            flex
            items-center
            sm:flex-row
            flex-col
          "
        >
        <Link to="/"
          class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-gray-900
          "
        >
          <span class="ml-3 text-xl text-white uppercase"
            >CHRONICLES GYM CENTER</span>
        </Link>
        <p
          class="
            text-sm text-white
            sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
            mt-2
          "
        >
          © 2022 CHRONICLES GYM CENTER. All rights reserved.
          
        </p>
        <span
          class="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-2
            justify-center
            sm:justify-start
          "
        >
          <a class="text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        </div>
      </footer>

    </div>
  )
}

export default Home