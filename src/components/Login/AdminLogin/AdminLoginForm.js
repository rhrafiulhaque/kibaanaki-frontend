import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init';
import { useDispatch } from 'react-redux';
import { authApi } from '../../../features/auth/authApi';
import { toast } from 'react-toastify';

const AdminLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    if (loading) {
        return <Loading />
    }
   
    
    const onSubmit = async (data) => {


        const { email, password } = data;
        dispatch(
            authApi.endpoints.getAdmin.initiate(
                email
            )
        ).unwrap().then(async (data) => {
            if (data.role === 'admin') {
                await signInWithEmailAndPassword(email, password);
                navigate('/admin/dashboard');
                
            } else {
                toast.error('You are not Admin');
            }

        })


    }

    let signInError = '';
    if (error) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }



    return (
        <div className='container py-16'>
            <div className='mx-auto max-w-lg shadow px-6 py-7 rounded overflow-hidden'>
                <h1 className='uppercase font-medium text-center text-2xl mb-1' > Admin Login</h1>
                <p className='text-gray-600 mb-6 text-sm text-center'>
                    Login If you are Valid Admin
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-gray-600 mb-2 block'>Email <span className='text-red-600'>*</span> </label>
                            <input type="email" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Email Address'
                                {
                                ...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Please Input Valid Email'
                                    }

                                })
                                }
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password" className='text-gray-600 mb-2 block'>Password<span className='text-red-600'>*</span> </label>
                            <input type="password" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Password'
                                {
                                ...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please input the password 6 digit or long'
                                    }
                                })
                                }
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <div>
                            <button className='px-4 py-2 w-full rounded border border-primary bg-primary text-white hover:bg-white hover:text-primary transition' type='submit'>Login</button>
                            {signInError}
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AdminLoginForm;