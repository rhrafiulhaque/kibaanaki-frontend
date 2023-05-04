import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductRatings = ({ratings}) => {
        const stars = [];
        for (let i = 0; i < ratings; i++) {
          stars.push(<FontAwesomeIcon key={i} className='text-sm text-yellow-400' icon={faStar} />);
        }
        for (let i = ratings; i < 5; i++) {
          stars.push(<FontAwesomeIcon key={i} className='text-sm text-gray-400' icon={faStar} />);
        }
        return stars;
      
};

export default ProductRatings;