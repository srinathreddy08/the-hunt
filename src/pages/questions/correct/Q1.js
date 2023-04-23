import React, { useEffect } from 'react';
import q1_image from '../../../assets/images/q1.jpeg'
import { Link } from 'react-router-dom';

const Q1 = () => {

    return (
        <div className='text-center'>
            {/* Question goes here */}
            <div>
                <p>
                    Let A be the number of triangles in the below figure.
                    Then choose the correct answer by solving the following equation
                    <b>(A / 5) + (4 * A) - (A - 10)</b>?
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src={q1_image} alt='image not available' />
            </div>

            {/* Options goes here */}
            <div>
                <Link to='/wq1'>
                    <button>20</button>
                </Link>
                <Link to='/q2'>
                    <button>74</button>
                </Link>
                <Link to='/wq1'>
                    <button>75</button>
                </Link>
                <Link to='/wq1'>
                    <button>18</button>
                </Link>
            </div>
        </div>
    );
}

export default Q1;