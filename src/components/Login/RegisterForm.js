import { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserRegisterMutation } from '../../features/auth/authApi';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RegisterForm = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [userRegister, { isLoading, error, isSuccess }] = useUserRegisterMutation();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const { name, email, password } = data;
        const submittedData = {
            name, email, password, role: 'User'
        }
        // await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        await userRegister(submittedData);
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Register Successfull. Please Check Your Email to Verify")
        }
    }, [isSuccess])


    let signInError = '';
    if (gError || updateError || error) {
        signInError = <p className='text-red-500'>{gError?.message || updateError?.message || error?.data?.message}</p>

    }

    if (gLoading || updating || loading || isLoading) {
        return <Loading />
    }

    if (gUser || user) {
        navigate('/')
    }

    return (
        <div className='container py-16'>
            <div className='mx-auto max-w-lg shadow px-6 py-7 rounded overflow-hidden'>
                <h1 className='uppercase font-medium text-2xl mb-1' >Create an account</h1>
                <p className='text-gray-600 mb-6 text-sm'>
                    Register here if you are a new customer
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-gray-600 mb-2 block'>Full Name <span className='text-red-600'>*</span> </label>
                            <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Full Name'
                                {
                                ...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z,'.\-\s]+$/,
                                        message: 'Please Input Valid Name'
                                    }
                                })
                                }
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
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
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                        message: 'password should contain min 6 letter password, with at least a symbol, upper and lower case letters and a number'
                                    }
                                })
                                }
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="confirm_password" className='text-gray-600 mb-2 block'>Confirm Password<span className='text-red-600'>*</span> </label>
                            <input type="password" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Confirm Password'
                                {
                                ...register('confirm_password', {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please input the password 6 digit or long'
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                        message: 'password should contain min 6 letter password, with at least a symbol, upper and lower case letters and a number'
                                    },
                                    validate: (val) => {
                                        if (watch('password') !== val) {
                                            return "Your passwords are do not match";
                                        }
                                    },
                                })
                                }
                            />
                            <label class="label">
                                {errors.confirm_password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                                {errors.confirm_password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                                {errors.confirm_password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                                {errors.confirm_password?.type === 'validate' && <span class="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                            </label>
                        </div>
                        <div className=''>
                            <span><input type="checkbox" className='mr-2'
                                {
                                ...register('condition', {
                                    required: {
                                        value: true,
                                        message: 'Please Agree with Our Terms and Conditions'
                                    }
                                })
                                }
                            />I have read and agree to the <span className='text-prim
                            '>terms & condition</span></span>
                        </div>
                        <label class="label">
                            {errors.condition?.type === 'required' && <span class="label-text-alt text-red-500">{errors.condition.message}</span>}
                        </label>
                        <div>
                            <button className='px-4 py-2 w-full rounded border border-primary bg-primary text-white hover:bg-white hover:text-primary transition'>Create an account</button>
                        </div>
                        {signInError}
                    </div>
                </form>

                <div className='mt-6 flex justify-center relative'>
                    <div className=' text-gray-600 uppercase px-3 bg-white z-10 relative'>Or SignUp in with</div>
                    <div className=' absolute left-0 top-3 w-full border-b-2 border-gray-200'></div>
                </div>

                <div className='mt-6 flex justify-center items-center gap-4'>

                    <button className='w-1/2 py-2  text-center bg-yellow-600 text-white rounded uppercase font-roboto font-medium text-sm hover:bg-yellow-500 transition' onClick={() => signInWithGoogle()}>Google</button>
                </div>
                <p className='mt-4 text-gray-600 text-center'> Already Have an account? <Link to={'/login'} className='cursor-pointer text-primary'> Login Now</Link> </p>
            </div>
        </div>
    );
};

export default RegisterForm;