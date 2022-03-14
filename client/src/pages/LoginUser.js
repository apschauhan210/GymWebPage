import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';

function LoginUser() {
    let navigate = useNavigate();
    
    const initialValues = {
      email: "",
      password: ""  
    };

    const onSubmit = (userData) => {
        UserService.loginUser(userData).then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem('accessToken', response.data);
                alert("You are logged in!");
                navigate('/');
            }
        })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email id is required'),
        password: Yup.string().required('Password can\'t be empty'),  
    })

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
    <div className='login'>
        <main class="min-h-screen bg-cover bg-no-repeat bg-center w-full bg-gray-900 mx-auto text-white " style={{backgroundImage: `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1688,h=608,fit=crop/YZ4e36r205iW0o7Z/pexels-cottonbro-ARqG6v79Jaueplj8.jpg`}}>
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
                
                <Link to="/" class="text-gray-700 dark:text-black lg:px-6 dark:hover:text-red-400 hover:text-black-500"> 
                  Home
                </Link>

                <a class="text-gray-700 dark:text-black lg:px-6 dark:hover:text-red-400 hover:text-black-500"
                    href="#">
                      Protein
                </a>

                <a class="text-gray-700 dark:text-black lg:px-6 dark:hover:text-red-400 hover:text-black-500"
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

            <section class="mx-auto max-w-md space-y-10 flex flex-col">
                <p class="text-5xl font-bold text-center uppercase">Log in</p>


                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div class="my-4">
                            <label htmlFor='email' class="my-1">Email Id:</label>
                            <ErrorMessage name='email' render={msg => <div class="error">{msg}</div>}/>
                            <Field id='email' name='email' placeholder='Email' type='email' autoComplete='off' class="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300" />
                        </div>
                        <div class="my-4">
                            <label htmlFor='password' class="my-1">Password:</label>
                            <ErrorMessage name='password' render={msg => <div class="error">{msg}</div>}/>
                            <Field id='password' name='password' placeholder='Password' type='password' autoComplete='off' class="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300" />
                        </div>
                        <button type='submit' class=" text-black transition-colors transform rounded-md opacity-100  border hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black dark:text-white hover:text-black focus:bg-gray-900 dark:focus:text-white w-full my-8  duration-300 py-2 font-semibold  uppercase">
                            Login
                        </button>
                        <p class="text-lg text-center mt-4">
                            Not registered?
                            <Link to="/register" class="text-orange-500 hover:underline font-medium underline-offset-4">Register</Link>
                        </p>
                    </Form>
                </Formik>
            </section>
        </main>
    </div>
  )
}

export default LoginUser