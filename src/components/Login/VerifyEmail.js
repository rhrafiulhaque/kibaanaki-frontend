import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <div className='flex justify-center text-center align-middle my-7'>
            <div className='space-y-5'>
                <FontAwesomeIcon className='text-3xl text-white font-bold bg-green-400 w-11 h-11 rounded-full p-2' icon={faCheck} />
                <h1 className='text-green-600 uppercase text-2xl font-semibold'>Your Email is Verified</h1>
                <p className='pb-5'>Thank you for registration on KinbaaNaki.Please Login with Your Email and Password  </p>
                <Link to={'/login'} className=' px-3 py-2 bg-primary text-white border border-primary hover:text-primary hover:bg-transparent rounded-lg uppercase'>Login</Link>
            </div>

        </div>
    );
};

export default VerifyEmail;