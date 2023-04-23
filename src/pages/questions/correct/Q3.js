import React from 'react';
import q3_image from '../../../assets/images/q3.jpeg'
import { Link } from 'react-router-dom';

const Q3 = () => {
    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    Identify the number of differences in the images given below.
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src={q3_image} alt='image is not available' />
            </div>

            {/* Options goes here */}
            <div>
                <Link to='/q4'>
                    <button>5</button>
                </Link>
                <Link to='/wq1'>
                    <button>6</button>
                </Link>
                <Link to='/wq1'>
                    <button>4</button>
                </Link>
                <Link to='/wq1'>
                    <button>7</button>
                </Link>
            </div>
        </div>
    );
}

export default Q3;